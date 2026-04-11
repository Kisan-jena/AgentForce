import { cn } from '../lib/utils';
import Container from './container';
import Heading from './heading';
import SubHeading from './sub-headings';
import Button from './ui/buttons';
import Image from 'next/image';
import LandingImage from './landing-image';

const Hero = () => {
  return (
    <div className="pt-10 md:pt-20 lg:pt-32 px-4 xl:px-0">
      <Container>
        <Heading as="h1">
          Agents that do the work <br /> Approvals that keep you safe.
        </Heading>
        <SubHeading className="py-8">
          Deploy AI agents that plan, act through your tools, and report
          outcomes-without changing how your teams work.
        </SubHeading>
        <div className="flex gap-6 items-center">
          <Button variant="primary" className="shadow-brand font-sans">
            Start your free trial
          </Button>
          <Button variant="outline" className="font-sans">
            View role based demos
          </Button>
        </div>
        <LandingImage/>
      </Container>
    </div>
  );
};

export default Hero;
