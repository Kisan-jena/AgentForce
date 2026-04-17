import Button from '../ui/buttons';
import Container from '../container';
import Heading from '../typography/heading';
import SubHeading from '../typography/sub-headings';
import LandingImage from '../sections/landing-image';

const Hero = () => {
  return (
    <div className="pt-10 bg-amber-00  md:pt-20 lg:pt-32 px-4 xl:px-0">
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
        <LandingImage />
      </Container>
    </div>
  );
};

export default Hero;
