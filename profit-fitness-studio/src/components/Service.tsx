import React from 'react';
import Bounded from './Bounded';
import Title from './Title';
import Paragraph from './Paragraph';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Service = () => {
  return (
    <Bounded
      id="service"
      className="min-h-screen service-bg !mx-0 flex flex-col gap-10 px-10 items-center justify-center"
    >
      <div className="flex flex-col gap-3 p-10 border-2 border-brand-red relative rounded-sm">
        <p className="absolute top-[-1rem] left-[1rem] bg-brand-white px-5 font-semibold uppercase text-brand-red animate-bounce text-fs-500">
          Only 5 days
        </p>
        <Title
          variant="black"
          size="md"
          className="font-normal uppercase text-balance"
        >
          Start <span className="font-semibold text-brand-red">your</span>{' '}
          <span className="font-semibold text-brand-red">Workout</span> now
        </Title>

        <Paragraph isBold>
          Enter your name and email in the form below to get your first free
          workout at Profit&reg;
        </Paragraph>
      </div>

      <form
        action=""
        className="flex flex-col gap-3 min-w-full md:min-w-[50%] md:self-start md:px-10"
      >
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <Input placeholder="Name" name="name" id="name" />
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <Input placeholder="Email" name="email" id="email"></Input>
        </div>

        <Button type="submit" className="self-start">
          Join Now
        </Button>
      </form>
    </Bounded>
  );
};

export default Service;
