import { Meal } from "@/app/schema";
import { Badge } from "@/components/ui/badge";
import ReactMarkdown from "react-markdown";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

export const MealCard = ({ meal }: { meal: Meal }) => {
  return (
    <Card key={crypto.randomUUID()} className="w-[31rem] p-4 bg-[#F9F9F9]">
      <CardTitle className="font-bold text-2xl text-[#333333]">
        {meal.name}
      </CardTitle>
      <CardDescription className="font-normal text-[1.2rem] w-[90%]">
        {meal.description}
      </CardDescription>
      <CardContent className="my-4 px-0">
        <Badge className="p-1 bg-[#55679C] hover:bg[#55679C]/80">
          {meal.calories} cal
        </Badge>{" "}
      </CardContent>
      <CardFooter className="p-0">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-[#1E2A5E] hover:bg-[#1E2A5E] rounded-full w-[11rem] h-[2.7rem]">
              View Recipe
            </Button>
          </DialogTrigger>
          <DialogContent className="overflow-y-scroll h-[500px]">
            <DialogHeader>
              <div className="prose lg:prose-xl">
                <ReactMarkdown className="prose">{meal.recipe}</ReactMarkdown>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};
