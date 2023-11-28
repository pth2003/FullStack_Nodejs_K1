"use client";
import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalenderIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
const DatePicker = () => {
  const [date, setDate] = useState(null);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"default"}
          className={cn(
            "w-full justify-between text-left font-medium",
            !date && "text-black"
          )}
        >
          {date ? format(date, "d MMM") : <span>Pick a date</span>}
          <CalenderIcon className="mr-2 h-5 w-5 text-black" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(newDate) => setDate(newDate)}
          initalFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
