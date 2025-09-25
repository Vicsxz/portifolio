// components/Card.tsx
interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const Card = ({ imageUrl, title, description }: CardProps) => {
  return (
    <div className="overflow-hidden bg-gray-50">
      {/* Imagem quadrada */}
      <div className="aspect-square overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Conteúdo */}
      <div className="p-4">
        <h3 className="mb-2 text-lg font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
