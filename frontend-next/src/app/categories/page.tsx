import { listCategories } from "@/api/Request";
import { BaseCard } from "@/components/card/baseCard";
import OnlyContent from "@/layout/onlyContent";

import SmallBanner from "@/components/banner/smallBanner";
import styles from "./page.module.scss";

export const dynamic = "auto",
  revalidate = 60 * 60 * 24;

const Page = async () => {
  const categorities = await getcategorities();
  return (
    <OnlyContent>
      <SmallBanner title="Categories"></SmallBanner>
      <BaseCard>
        <div className={styles.Categories}>
          {categorities.map((item) => {
            return (
              <div key={item.id} className="">
                <BaseCard className={styles.itemCard}>{item.name}</BaseCard>
              </div>
            );
          })}
        </div>
      </BaseCard>
    </OnlyContent>
  );
};

const getcategorities = async () => {
  return await listCategories();
};

export default Page;
