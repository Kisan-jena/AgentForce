import { Plus } from 'lucide-react';
import Container from '../../container';
import Heading from '../../typography/heading';
import SubHeading from '../../typography/sub-headings';
import {
  Card,
  CardContent,
  CardCTA,
  CardSkeleton,
  CardTitle,
} from '../../ui/card';
import {SkeletonOne} from './first';
import { SkeletonTwo } from './secound';
import { SkeletonThree } from './third';

const Features = () => {
  return (
    <Container className="bg-amber-0 py-10 md:py-20 lg:py-32 px-4">
      <div className="flex bg-amber-00 justify-between gap-10 items-baseline-last">
        <Heading className="lg:max-w-xl">
          Built for Fast Moving Teams That Need <br /> Control.
        </Heading>
        <SubHeading className="bg-amber-00">
          Agents work inside your existing tools, with built-in approvals, brand
          and policy guardrails, and full traceability. Every action is
          auditable, every outcome accountable.
        </SubHeading>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10 md:my-20">
        <Card className="rounded-tl-3xl rounded-bl-3xl">
          <CardSkeleton>
            <SkeletonOne/>
          </CardSkeleton>
          <CardContent className="flex bg-amber-00 justify-between">
            <CardTitle className="bg-red-00">
              Prebuilt Agents, Tuned to Your Workflows
            </CardTitle>
            <div className="bg-red-00 flex justify-center items-center">
              <CardCTA>
                <Plus />
              </CardCTA>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardSkeleton>
            <SkeletonTwo/>
          </CardSkeleton>
          <CardContent className="flex justify-between">
            <CardTitle>Automate Handoffs, Reduce Ops Friction</CardTitle>
            <div className="bg-red-00 flex justify-center items-center">
              <CardCTA>
                <Plus />
              </CardCTA>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-br-3xl rounded-tr-3xl">
          <CardSkeleton>
            <SkeletonThree/>
          </CardSkeleton>
          <CardContent className="flex justify-between">
            <CardTitle>Approvals, Guardrails, and Full Auditability</CardTitle>
            <div className="bg-red-00 flex justify-center items-center">
              <CardCTA>
                <Plus />
              </CardCTA>
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default Features;
