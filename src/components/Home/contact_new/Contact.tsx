import ContainerWrapper from "@/components/common/ContainerWrapper";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Select from "react-select";

const formSchema = z.object({
  fullName: z.string(),
  email: z.string(),
  phone: z.number(),
  message: z.string(),
});

const options = [
  { value: "Business Setup", label: "Business Setup" },
  { value: "Banikng", label: "Banikng" },
  { value: "Marketing", label: "Marketing" },
  { value: "Pro Services", label: "Pro Services" },
  { value: "Licence Renewa", label: "Licence Renewal" },
  { value: "Virtual Office", label: "Virtual Office" },
];

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: 0,
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="bg-primary  py-14">
      <ContainerWrapper>
        <div className=" flex flex-col md:flex-row ">
          <div className="flex-1 p-10 font-bold">
            <div className=" flex flex-col gap-5 text-neutral-600">
              <h3 className="text-4xl italic font-extrabold text-secondary">
                Let's Get
                <span className="ml-2 text-green">Started</span>
              </h3>
              <p>
                Rakez’s mission is to be a one-stop company for all your
                business needs.
              </p>
              <p>
                Over the last 13 years, our team has helped over 75,000 startups
                and SMEs expand and grow their business.
              </p>
              <p>
                We offer tailored solutions to help your business from pre-setup
                to growth.
              </p>
              <p>
                Contact us to begin your successful business journey in the UAE.
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
                      <>
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="border-0 border-b rounded-none px-0 font-light"
                              placeholder="Type Full Name..."
                            />
                          </FormControl>
                        </FormItem>
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              className="border-0 border-b rounded-none px-0 font-light"
                              placeholder="Type Email..."
                            />
                          </FormControl>
                        </FormItem>
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Type Phone Number..."
                              className="border-0 border-b rounded-none px-0 font-light"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                        <div className="text-black">
                          <FormLabel>Services</FormLabel>
                          <Select options={options} className="font-light" />
                        </div>

                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              className="border-0 border-b rounded-none px-0 font-light"
                              placeholder="Type Message..."
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      </>
                    )}
                  />
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-secondary px-10">
                      Submit
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
