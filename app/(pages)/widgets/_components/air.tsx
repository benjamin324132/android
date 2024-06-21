import { Slider2 } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const Air = () => {
  return (
    <div className="w-full rounded-3xl p-4 shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">Air Conditioner</h3>
          <p className="text-sm text-neutral-400">Heating</p>
        </div>
        <div>
          <Switch />
        </div>
      </div>
      <div className="w-full flex items-center justify-end pt-4">
        <h2 className="text-4xl font-semibold">28°</h2>
      </div>
      <div className="py-2">
        <SliderDemo />
      </div>
    </div>
  );
};

type SliderProps = React.ComponentProps<typeof Slider2>;

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <Slider2
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-[100%]", className)}
      {...props}
    />
  );
}

export default Air;
