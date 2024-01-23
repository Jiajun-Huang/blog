// uncache

import { listTags } from "@/api/Request";
import SmallBanner from "@/components/banner/smallBanner";
import { BaseCard } from "@/components/card/baseCard";
import OnlyContent from "@/layout/onlyContent";

import Link from "next/link";
import styles from "./page.module.scss";
export const dynamic = "force-dynamic";

const Page = async () => {
  const tags = await getTags();
  return (
    <OnlyContent>
      <SmallBanner title="Tags"></SmallBanner>
      <BaseCard>
        <div className={styles.Tags}>
          {tags.map((item) => {
            return (
              <span key={item.id} className={styles.tagItem}>
                <Link href={"/tags/" + item.name}>{item.name}</Link>
              </span>
            );
          })}
        </div>
      </BaseCard>
    </OnlyContent>
  );
};

const getTags = async () => {
  const tags = await listTags();
  return tags;
};

export default Page;
