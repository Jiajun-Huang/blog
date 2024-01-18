import { listCategories } from "@/api/Request";
import { BaseCard } from "@/components/card/baseCard";
import OnlyContent from "@/layout/onlyContent";

import styles from "./page.module.scss";
export const dynamic = "force-dynamic";

const Page = async () => {
  const categorities = await getcategorities();
  return (
    <OnlyContent>
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
