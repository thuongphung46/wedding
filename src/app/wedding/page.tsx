import Image from "next/image";

interface WeddingPageProps {
  params: Promise<{
    user: string;
    guestId: string;
  }>;
}

// ✅ metadata theo params (Server Component)
export async function generateMetadata({ params }: WeddingPageProps) {
  const { user, guestId } = await params;

  return {
    title: `Thiệp cưới của ${user}`,
    description: `Mời khách mời với mã ${guestId}`,
    openGraph: {
      title: `Thiệp cưới của ${user}`,
      description: `Xin chào khách mời có mã ${guestId}`,
      images: [
        {
          url: "/wedding-fake.jpg",
          width: 800,
          height: 600,
          alt: "Ảnh cưới của cô dâu chú rể",
        },
      ],
    },
  };
}

export default async function WeddingPage({ params }: WeddingPageProps) {
  const { user, guestId } = await params;

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h1>🎉 Thiệp cưới của {user}</h1>
      <p>
        Xin chào khách mời với mã: <strong>{guestId}</strong>
      </p>

      <div style={{ marginTop: 20 }}>
        <Image
          src="/wedding-fake.jpg"
          alt="Ảnh cưới hạnh phúc"
          width={500}
          height={350}
          style={{ borderRadius: 12 }}
        />
      </div>
    </div>
  );
}
