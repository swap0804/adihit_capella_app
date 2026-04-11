import Image from "next/image";

type BrandMarkProps = {
  priority?: boolean;
};

export function BrandMark({ priority = false }: BrandMarkProps) {
  return (
    <Image
      src="/images/adihit-capella-logo.png"
      alt="Adihit Capella"
      width={591}
      height={130}
      priority={priority}
      unoptimized
      sizes="(min-width: 1024px) 238px, (min-width: 640px) 220px, 170px"
      className="h-auto w-[170px] object-contain sm:w-[220px] lg:w-[238px]"
    />
  );
}
