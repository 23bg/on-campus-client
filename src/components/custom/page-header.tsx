// components/ui/PageHeader.tsx
interface HeaderProps {
    title: string;
    description: string;
  }
  
  const PageHeader = ({ title, description }: HeaderProps) => {
    return (
      <div className="pb-4 px-4 md:px-6 pt-6 md:mx-36">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    );
  };
  
  export default PageHeader;
  