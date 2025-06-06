"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useQueryState } from "nuqs";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { type } from "arktype";

// ArkType Schema
const formSchema = type({
  name: "string>1", // String with minimum length of 2
  category: "string>0", // String with minimum length of 1
  targetAmount: "number>0", // Positive number
  icon: "string?", // Optional string
  startDate: "Date",
  endDate: "Date?", // Optional date
  autoSave: "boolean = false", // Boolean with default false
  saveFrequency: "string?", // Optional string
  motivation: "string?", // Optional string
  reminders: "boolean = false", // Boolean with default false
});

// Type inference from ArkType schema
type FormData = typeof formSchema.infer;

// Custom validation function for ArkType integration
function validateWithArkType(data: any) {
  const result = formSchema(data);

  if (result instanceof type.errors) {
    // Convert ArkType errors to react-hook-form format
    const errors: Record<string, { message: string }> = {};

    result.forEach((error) => {
      const path = error.path?.join(".") || "root";
      errors[path] = {
        message: error.message || `Invalid value at ${path}`,
      };
    });

    return { errors };
  }

  return { data: result };
}

export function GoalCreateDialog() {
  const [dialogOpen, setDialogOpen] = useQueryState<boolean>("goalDialog", {
    defaultValue: false,
    parse: (v) => v === "true",
    serialize: (v) => (v ? "true" : "false"),
  });

  const [step, setStep] = useQueryState<number>("createStep", {
    defaultValue: 1,
    parse: (v) => parseInt(v) || 1,
    serialize: (v) => v.toString(),
  });

  const form = useForm<FormData>({
    defaultValues: {
      name: "",
      category: "",
      targetAmount: 0,
      startDate: new Date(),
      endDate: undefined,
      autoSave: false,
      reminders: false,
      icon: "",
      saveFrequency: "",
      motivation: "",
    },
    mode: "onChange",
  });

  useEffect(() => {
    if (!dialogOpen) {
      form.reset();
      setStep(1);
    }
  }, [dialogOpen, form, setStep]);

  const startDate = form.watch("startDate");

  async function onSubmit(values: FormData) {
    // Validate with ArkType
    const validation = validateWithArkType(values);

    if (validation.errors) {
      // Set form errors
      Object.entries(validation.errors).forEach(([field, error]) => {
        form.setError(field as keyof FormData, error);
      });
      return;
    }

    console.log(validation.data);
    await setDialogOpen(false);
    // Submit logic here
  }

  async function handleStepChange(newStep: number) {
    // Validate current step before proceeding
    if (newStep > step) {
      let fieldsToValidate: (keyof FormData)[] = [];

      if (step === 1) {
        fieldsToValidate = ["name", "category"];
      } else if (step === 2) {
        fieldsToValidate = ["startDate"];
      }

      // Trigger validation for current step fields
      const isValid = await form.trigger(fieldsToValidate);
      if (!isValid) return;

      // Additional ArkType validation for step 1
      if (step === 1) {
        const stepData = {
          name: form.getValues("name"),
          category: form.getValues("category"),
        };

        const nameResult = type("string>1")(stepData.name);
        const categoryResult = type("string>0")(stepData.category);

        if (nameResult instanceof type.errors) {
          form.setError("name", { message: "Give your goal a name" });
          return;
        }

        if (categoryResult instanceof type.errors) {
          form.setError("category", { message: "Select a category" });
          return;
        }
      }
    }

    await setStep(newStep);
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={(open) => setDialogOpen(open)}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {Array.from({ length: 3 }, (_, i) => (
              <div key={i} className="flex items-center">
                <span
                  className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full",
                    step >= i + 1
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}
                >
                  {i + 1}
                </span>
                {i < 2 && (
                  <span
                    className={cn(
                      step > i + 1 ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                {/* Step 1: Goal Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Goal Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Hawaii Vacation, New Laptop..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Example: Category Field */}
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Travel, Tech, Savings..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="targetAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Target Amount</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="1000"
                          {...field}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end">
                  <Button type="button" onClick={() => handleStepChange(2)}>
                    Next: Plan Timeline
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                {/* Step 2: Dates */}
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Start Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value
                                  ? format(field.value, "PPP")
                                  : "Pick a date"}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date < new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="endDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>End Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value
                                  ? format(field.value, "PPP")
                                  : "Pick a date"}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date < startDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="ghost"
                    type="button"
                    onClick={() => handleStepChange(1)}
                  >
                    Back
                  </Button>
                  <Button type="button" onClick={() => handleStepChange(3)}>
                    Next: Customize
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                {/* Step 3: Auto-Save */}
                <FormField
                  control={form.control}
                  name="autoSave"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Auto-Save</FormLabel>
                        <FormDescription>
                          Automatically transfer funds to this goal
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="reminders"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Reminders</FormLabel>
                        <FormDescription>
                          Get notified about your goal progress
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className="flex justify-between">
                  <Button
                    variant="ghost"
                    type="button"
                    onClick={() => handleStepChange(2)}
                  >
                    Back
                  </Button>
                  <Button type="submit">Create Goal 🎯</Button>
                </div>
              </div>
            )}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
