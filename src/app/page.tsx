import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-32">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Sample Card Header</CardTitle>
                <CardDescription>This is a sample description to see how it will look</CardDescription>
                <CardAction>sample action</CardAction>
              </CardHeader>
              <CardContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vehicula nunc tortor, in pulvinar nunc congue non. Donec vitae
                velit lobortis, dapibus purus nec, vulputate lacus. Nullam
                vulputate auctor lacus eu eleifend. Suspendisse nunc lacus,
                tempus aliquam lacinia bibendum, faucibus vitae velit. Duis
                ornare, purus sed imperdiet tempor, enim massa tristique erat,
                ut volutpat libero justo nec nunc. Fusce in sodales lectus. Sed
                a diam sed leo congue malesuada. Fusce ut sodales nunc, sit amet
                tempor nulla. Etiam tempor arcu rutrum neque aliquam iaculis id
                a risus. Mauris volutpat auctor nisi et consectetur. In hac
                habitasse platea dictumst. Nulla diam tortor, imperdiet non
                magna et, posuere porttitor est. Aliquam pharetra tellus sed
                molestie convallis. Vivamus eu ante pretium erat bibendum
                mattis.
              </CardContent>
              <CardFooter className="justify-end gap-2">
                <Button variant="default">Action 1</Button>
                <Button variant="secondary">Action 2</Button>
                <Button variant="ghost">Action 3</Button>
                <Button variant="destructive">Action 4</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
