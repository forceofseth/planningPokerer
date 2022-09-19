interface CardProps {
  cardText: string;
  cardValue: number;
}

export const Card = (prop: CardProps) => {
  return (
    <div class="m-auto border border-black w-32 h-48 rounded-md text-5xl flex justify-center items-center">
      {prop.cardText}
    </div>
  );
};
