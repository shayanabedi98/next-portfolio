type Props = {
  name: string;
  icon: JSX.Element;
};

export default function TechnologiesItem({ icon, name }: Props) {
  return (
    <div className="flex items-center justify-start gap-8 px-5 py-3 bg-secondary-color text-primary-color rounded-xl">
      <div className="text-6xl">{icon}</div>
      <p className="text-xl font-semibold">{name}</p>
    </div>
  );
}
