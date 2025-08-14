import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const HowToPlay = () => {
  return (
    <div className="pt-5">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="cursor-none" >
            How to Play?
          </AccordionTrigger>
          <AccordionContent>
            <div className="text-[.8rem]  mt-2">
              <b>To Win:</b> You must <b>clear</b> all the points by clicking
              them in the correct numerical order.
            </div>
            <div className="text-[.8rem]  mt-2 mb-5">
              If you <b>click out of order</b>, the game will <b>end</b>.
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-2">
          <AccordionTrigger className="cursor-none">
            {" "}
            Difficulty Settings
          </AccordionTrigger>
          <AccordionContent>
            <div className="text-[.8rem] mt-2">
              <b>Easy:</b> Just clear the points by clicking them in order.
            </div>
            <div className="text-[.8rem]  mt-2">
              <b>Normal:</b> If you cannot find the next point within 3 seconds,
              the game will end.
            </div>
            <div className="text-[.8rem]  mt-2">
              <b>Hard:</b> The allowed clicking time is reduced to 1.5 seconds.
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default HowToPlay;
