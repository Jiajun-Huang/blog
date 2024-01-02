
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeMathjax from "rehype-mathjax";
import rehypeRaw from "rehype-raw";
import remarkMath from "remark-math";
import rehypeAutolinkHeadings from "rehype-autolink-headings"

const rehype = [rehypeHighlight, rehypeAutolinkHeadings, rehypeMathjax];

const computedFields = {
    slug : {
        type : 
    }
}