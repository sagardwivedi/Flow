import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";

import {
  ComponentPropsWithoutRef,
  createContext,
  ElementType,
  ReactNode,
  useContext,
} from "react";

// --------------------------------------
// Context Setup
// --------------------------------------

type ModalDrawerContextType = {
  isDesktop: boolean;
};

const ModalDrawerContext = createContext<ModalDrawerContextType | null>(null);

const useModalDrawerContext = () => {
  const context = useContext(ModalDrawerContext);
  if (!context) {
    throw new Error("ModalDrawer components must be used within <ModalDrawer>");
  }
  return context;
};

// --------------------------------------
// Prop Types
// --------------------------------------

interface ModalDrawerRootProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}

interface ModalDrawerComponentProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
}

// --------------------------------------
// Root Component
// --------------------------------------

const ModalDrawer = ({
  open,
  onOpenChange,
  children,
}: ModalDrawerRootProps) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const RootComponent = isDesktop ? Dialog : Drawer;

  return (
    <ModalDrawerContext.Provider value={{ isDesktop }}>
      <RootComponent
        open={open}
        onOpenChange={onOpenChange}
        {...(!isDesktop && { autoFocus: true })}
      >
        {children}
      </RootComponent>
    </ModalDrawerContext.Provider>
  );
};

// --------------------------------------
// Factory for Responsive Component
// --------------------------------------

function createResponsiveComponent<
  TDesktop extends ElementType,
  TMobile extends ElementType,
>(DesktopComponent: TDesktop, MobileComponent: TMobile) {
  type DesktopProps = ComponentPropsWithoutRef<TDesktop>;
  type MobileProps = ComponentPropsWithoutRef<TMobile>;
  type CombinedProps = (DesktopProps | MobileProps) & {
    className?: string;
    children?: React.ReactNode;
  };

  return function ResponsiveComponent(props: CombinedProps) {
    const { isDesktop } = useModalDrawerContext();
    const Component = isDesktop ? DesktopComponent : MobileComponent;

    return <Component {...(props)} />;
  };
}

// --------------------------------------
// Components
// --------------------------------------

const ModalDrawerTrigger = createResponsiveComponent(
  DialogTrigger,
  DrawerTrigger,
);
const ModalDrawerClose = createResponsiveComponent(DialogClose, DrawerClose);
const ModalDrawerContent = createResponsiveComponent(
  DialogContent,
  DrawerContent,
);
const ModalDrawerHeader = createResponsiveComponent(DialogHeader, DrawerHeader);
const ModalDrawerTitle = createResponsiveComponent(DialogTitle, DrawerTitle);
const ModalDrawerDescription = createResponsiveComponent(
  DialogDescription,
  DrawerDescription,
);
const ModalDrawerFooter = createResponsiveComponent(DialogFooter, DrawerFooter);

const ModalDrawerBody = ({
  children,
  className,
}: ModalDrawerComponentProps) => {
  return <div className={cn("px-4 md:px-0", className)}>{children}</div>;
};

// --------------------------------------
// Exports
// --------------------------------------

export {
  ModalDrawer,
  ModalDrawerBody,
  ModalDrawerClose,
  ModalDrawerContent,
  ModalDrawerDescription,
  ModalDrawerFooter,
  ModalDrawerHeader,
  ModalDrawerTitle,
  ModalDrawerTrigger,
};
