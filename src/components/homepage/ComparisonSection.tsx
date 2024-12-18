import { Compare } from "@/components/ui/compare";

export const CompareDemo: React.FC = () => {
  return (
    <div className="w-3/4 mx-auto h-[60vh] px-1 md:px-8 flex items-center justify-center [perspective:800px] [transform-style:preserve-3d]">
      <div
        style={{
          transform: "rotateX(15deg) translateZ(80px)",
        }}
        className="p-1 md:p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 mx-auto w-3/4 h-1/2 md:h-3/4"
      >
        <Compare
          firstImage="https://storage.googleapis.com/simpli-fisc/new_image.jpg"
          secondImage="https://storage.googleapis.com/simpli-fisc/old_image.png"
          firstImageClassName="object-cover object-left-top w-full"
          secondImageClassname="object-cover object-left-top w-full"
          className="w-full h-full rounded-[22px] md:rounded-lg"
          initialSliderPercentage={20}
          slideMode="hover"
          autoplay={true}
        />
      </div>
    </div>
  );
}
