import { Button, Divider, message, Result } from "antd";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "./firebase";
import Loading from "./Loading";

interface doc {
  [versionNum: string]: string;
}
async function fetchDoc(): Promise<doc | null> {
  try {
    const _doc = await getDoc(doc(firestore, "config/versions"));
    message.success("Downloaded Successfully");
    return _doc.data() as any;
  } catch (e) {
    message.error("Something went wrong");
  }
  return null;
}

export default function Dashbord() {
  const [doc, setDoc] = useState<
    { version: string; url: string }[] | null | undefined
  >(null);
  async function getVersions() {
    if (doc === undefined) return;
    setDoc(undefined);
    const _doc = await fetchDoc();
    setDoc(
      _doc
        ? Object.entries(_doc)
            .sort(([x], [y]) => -x - -y)
            .map(([x, y]) => ({ version: x, url: y }))
        : null
    );
  }
  useEffect(() => {
    getVersions();
  }, []);
  if (doc === undefined) return <Loading />;
  if (doc === null) return <Button onClick={getVersions}>Reset</Button>;
  return (
    <div>
      {doc.map((x, i) => {
        return (
          <>
            <Result
              key={x.version}
              status={i ? "warning" : "success"}
              title={i ? "Older Version" : "Latest Version"}
              subTitle={"Version Number " + x.version}
              extra={[<Button href={x.url}>Download APK</Button>]}
            />
            <Divider dashed />
          </>
        );
      })}
    </div>
  );
}
