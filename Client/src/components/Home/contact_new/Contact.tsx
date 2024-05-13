import ContainerWrapper from "@/components/common/ContainerWrapper";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Select from "react-select";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const formSchema = z.object({
  fullName: z.string().min(3, { message: "Name is required" }),
  email: z.string().email(),
  phone: z.string().min(10, { message: "Phone number is required" }),
  message: z.string().min(3, { message: "Message is required" }),
  service: z.object({ value: z.string().min(3), label: z.string().min(3) }),
});

const options = [
  "Business Setup",
  "Banking",
  "Marketing",
  "Pro Services",
  "License Renewal",
  "Virtual Office",
];

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
      service: {
        value: "",
        label: "Select Service",
      },
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URI}/contact/createContact`,
        {
          name: values.fullName,
          email: values.email,
          phone: values.phone,
          message: values.message,
          services: [values.service.value],
        }
      );
      toast.success("Message sent successfully");
    } catch (error) {
      console.log(error);
    } finally {
      form.reset();
    }
    setLoading(false);
  }

  return (
    <div className="bg-primary  py-14" id="home-contact">
      <ContainerWrapper>
        <div className=" flex flex-col md:flex-row ">
          <div className="flex-1 p-10 font-bold">
            <div className=" flex flex-col gap-5 text-neutral-600">
              <h3 className="text-4xl italic font-extrabold text-secondary">
                Let's Get Started With Us
              </h3>
              <p>
                Rakez aims to be your all-in-one service for every business
                need.
              </p>
              <p>
                In the past 13 years, we've helped more than 75,000 startups and
                small businesses get bigger and better.
              </p>
              <p>
                We provide custom solutions to support your business from the
                start-up phase to growth.
              </p>
              <p>
                Get in touch to start your successful business setup in Dubai.
              </p>
            </div>
          </div>
          <div className="flex-1 px-12 py-7 ">
            <div className="flex justify-center items-center">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4 font-bold w-full bg-white p-10 rounded-lg shadow-lg"
                >
                  <h2 className="text-3xl text-secondary">Get in Touch</h2>
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="border-0 border-b rounded-none px-0 font-light"
                            placeholder="Type Full Name..."
                            type="text"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            className="border-0 border-b rounded-none px-0 font-light"
                            placeholder="Type Email..."
                            {...field}
                            type="email"
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
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Type Phone Number..."
                            className="border-0 border-b rounded-none px-0 font-light"
                            {...field}
                            type="text"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service</FormLabel>
                        <FormControl>
                          <Select
                            options={options.map((option) => ({
                              value: option,
                              label: option,
                            }))}
                            className="font-light"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            className="border-0 border-b rounded-none px-0 font-light"
                            placeholder="Type Message..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-secondary px-10">
                      {loading ? "Loading..." : "Submit"}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default Contact;
