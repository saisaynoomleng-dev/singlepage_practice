import { FadeInEffect, SlideInGroup } from '../animations/gsapAni';
import Bounded from '../Bounded';
import SectionTitle from '../SectionTitle';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

const Contact = ({ id }: { id: string }) => {
  return (
    <Bounded
      id={id}
      className="flex items-center justify-center flex-col gap-5"
    >
      <FadeInEffect>
        <SectionTitle as="h2" size="sm">
          Contact
        </SectionTitle>
      </FadeInEffect>

      <form
        action=""
        className="flex flex-col gap-5 w-full md:!max-w-[70%] lg:!max-w-[50%] "
      >
        <SlideInGroup direction="top">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <Input name="name" id="name" type="text" placeholder="Name" />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <Input type="text" name="email" id="email" placeholder="Email" />
          </div>

          <div>
            <label htmlFor="subject" className="sr-only">
              Email
            </label>
            <Input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
            />
          </div>

          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Message"
              rows={30}
            />
          </div>

          <div className="mt-5">
            <Button type="submit">Submit</Button>
          </div>
        </SlideInGroup>
      </form>
    </Bounded>
  );
};

export default Contact;
