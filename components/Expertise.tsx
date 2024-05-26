import { Progress } from '@/components/ui/progress';

type ExpertiseProps = {
  title: string;
  percentage: number;
  className?: string;
};

export function Expertise({className, title, percentage }: ExpertiseProps) {
  return (
    <div className={className}>
      <div className='flex items-end justify-between'>
        <h4 className='font-body font-semibold uppercase text-black dark:text-white'>
          {title}
        </h4>
        <h3 className='font-body text-3xl font-bold text-violet-800'>{percentage}%</h3>
      </div>
      <Progress value={percentage} className='mt-2 h-3 w-full' />
    </div>
  );
}
