import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  title: z.string().optional(),
  organization: z.string().optional(),
  missionEnvironment: z.string().min(1, "Please select a mission environment"),
  communicationSystem: z.string().optional(),
  personnelCount: z.string().optional(),
  deploymentTimeline: z.string().optional(),
  contactMethod: z.string().optional(),
  comments: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export const ConsultationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      title: "",
      organization: "",
      missionEnvironment: "",
      communicationSystem: "",
      personnelCount: "",
      deploymentTimeline: "",
      contactMethod: "",
      comments: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Form data:", data);
    
    toast({
      title: "Consultation Request Submitted",
      description: "We'll contact you within 24 hours to discuss your mission requirements.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-background/95 backdrop-blur-sm border border-border/50 rounded-lg p-8 shadow-2xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-medium">
                      First Name *
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="bg-background border-input"
                        placeholder="Enter your first name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-medium">
                      Last Name *
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="bg-background border-input"
                        placeholder="Enter your last name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-medium">
                      Email *
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        type="email"
                        className="bg-background border-input"
                        placeholder="your.email@domain.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-medium">
                      Phone Number *
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        type="tel"
                        className="bg-background border-input"
                        placeholder="(555) 123-4567"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Professional Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-medium">
                      Title
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="bg-background border-input"
                        placeholder="Your job title"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="organization"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-medium">
                      Unit/Organization
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="bg-background border-input"
                        placeholder="Your unit or organization"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Mission Environment */}
            <FormField
              control={form.control}
              name="missionEnvironment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-medium">
                    Mission Environment *
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-background border-input">
                        <SelectValue placeholder="Select your mission environment" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="aviation">Aviation</SelectItem>
                      <SelectItem value="ground">Ground</SelectItem>
                      <SelectItem value="maritime">Maritime</SelectItem>
                      <SelectItem value="industrial">Industrial</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Communication System */}
            <FormField
              control={form.control}
              name="communicationSystem"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-medium">
                    Communication System Used
                  </FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      className="bg-background border-input"
                      placeholder="Describe your communication system"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Personnel and Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="personnelCount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-medium">
                      # of Personnel Requiring Scans
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        type="number"
                        min="1"
                        className="bg-background border-input"
                        placeholder="Number of personnel"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="deploymentTimeline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-medium">
                      Deployment Timeline
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="bg-background border-input"
                        placeholder="When do you need this deployed?"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Contact Method */}
            <FormField
              control={form.control}
              name="contactMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-medium">
                    Preferred Contact Method
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-background border-input">
                        <SelectValue placeholder="How would you prefer to be contacted?" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone</SelectItem>
                      <SelectItem value="video-call">Video Call</SelectItem>
                      <SelectItem value="in-person">In-Person Meeting</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Comments */}
            <FormField
              control={form.control}
              name="comments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-medium">
                    Comments
                  </FormLabel>
                  <FormControl>
                    <Textarea 
                      {...field} 
                      className="bg-background border-input min-h-[120px]"
                      placeholder="Tell us more about your specific needs, challenges, or requirements..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className="pt-6">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[hsl(var(--scarlet-red))] text-[hsl(var(--signal-white))] hover:bg-[hsl(349_70%_38%)] shadow-[var(--shadow-alert)] transition-[var(--transition-tactical)] text-lg py-6"
              >
                {isSubmitting ? "Submitting..." : "Submit Consultation Request"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};