import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { Calendar, MoreVertical } from "lucide-react";

type HistoryItem = {
  date: string;
  detail: string;
};

interface DigestHistoryCardProps {
  title: string;
  data: HistoryItem[];
}

export function DigestHistoryCard({ title, data }: DigestHistoryCardProps) {
  return (
    <Card className="col-span-1 shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 bg-[hsl(var(--custom-header-bg))] text-[hsl(var(--custom-header-fg))] rounded-t-lg">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <MoreVertical className="h-5 w-5 cursor-pointer" />
      </CardHeader>
      <CardContent className="pt-6">
        <div className="relative mb-4">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Date" className="pl-10" />
        </div>
        <Table>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.date}</TableCell>
                <TableCell className="text-right">{item.detail}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}