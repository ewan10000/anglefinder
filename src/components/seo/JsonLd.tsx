type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

function stringifyJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function JsonLd({ data }: JsonLdProps) {
  const schemas = Array.isArray(data) ? data : [data];

  if (schemas.length > 1) {
    const graph = {
      "@context": "https://schema.org",
      "@graph": schemas.map((schema) => {
        const { "@context": _, ...rest } = schema as Record<string, unknown>;
        return rest;
      }),
    };
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(graph) }}
      />
    );
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifyJsonLd(schemas[0]) }}
    />
  );
}
