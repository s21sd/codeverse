import { Code, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";
// import { useDeleteCodeMutation } from "@/redux/api";
// import { codeType } from "@/vite-env";
// import { motion } from 'framer-motion';
// import { transition1 } from "@/pages/Transition";
export default function CodeItem({
    data,
    deleteBtn,
}: {
    data: any;
    deleteBtn: boolean;
}) {

    // const { fullCode } = data;
    // const [deleteCode] = useDeleteCodeMutation();
    // const handleDelete = async () => {
    //     try {
    //         await deleteCode(data._id!).unwrap();
    //     } catch (error) {
    //         HandleErrors(error);
    //     }
    // };
    return (
        <div

            className="p-3 rounded cursor-pointer bg-slate-900 flex justify-start items-center flex-col gap-3">
            <div className="__top flex justify-start items-start gap-3 w-full">
                <Code />
                <p className="font-mono font-bold text-lg">{data.title}</p>
            </div>
            <Separator />
            <div className="__btn_container flex gap-3">
                {deleteBtn && (
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="destructive">
                                Delete
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle className="flex gap-1 justify-center items-center">
                                    <Trash2 />
                                    Delete Code confirmation!
                                </DialogTitle>
                                <div className="__url flex justify-center items-center flex-col gap-1">
                                    <p>
                                        Are you sure, that you want to delete this code, this action
                                        is not reversible.
                                    </p>
                                    <Button
                                        variant="destructive"
                                        className="h-full"

                                    >
                                        Confirm Delete
                                    </Button>
                                </div>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                )}
            </div>
        </div>
    );
}