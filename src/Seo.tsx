import { Helmet } from "react-helmet-async";

type SeoProps = {
    title: string;
    description: string;
    canonical: string;
    robots?: string;
};

const DEFAULT_OG_IMAGE = "https://iloader.app/iloader.svg";
const DEFAULT_ROBOTS =
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

export default function Seo({
    title,
    description,
    canonical,
    robots = DEFAULT_ROBOTS,
}: SeoProps) {
    return (
        <Helmet>
            <title>{title}</title>
            <link rel="canonical" href={canonical} />
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="robots" content={robots} />
            <meta name="googlebot" content={robots} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical} />
            <meta property="og:image" content={DEFAULT_OG_IMAGE} />

            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
        </Helmet>
    );
}
