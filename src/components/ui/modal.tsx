import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  heading: string;
  headingDescription: string;
  trigger: React.ReactNode;
  content: React.ReactNode;
  onConfirm: VoidFunction;
  renderFooter?: boolean;
  actionLabel?: string;
  cancelLabel?: string;
};
export function Modal({
  open,
  setOpen,
  heading,
  headingDescription,
  content,
  trigger,
  onConfirm,
  renderFooter = true,
  actionLabel,
  cancelLabel,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{heading}</DialogTitle>
            <DialogDescription>{headingDescription}</DialogDescription>
          </DialogHeader>
          {content}
          {renderFooter && (
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">{cancelLabel}</Button>
              </DialogClose>
              <Button onClick={onConfirm} type="submit">
                {actionLabel}
              </Button>
            </DialogFooter>
          )}
        </DialogContent>
      </>
    </Dialog>
  );
}
