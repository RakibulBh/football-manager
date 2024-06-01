import { Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { createClient } from '@/utils/supabase/server';

export const EditFixture = async ({ id }: { id: number }) => {
  const supabase = createClient();

  const getMatch = async () => {
    'use server';

    // const {data, error} = await supabase.from("Teams").select(id);
  };

  // const { data: teamData, error: teamError } = await supabase
  //   .from('Teams')
  //   .select();

  // console.log(teamData, teamError);

  const { data, error } = await supabase
    .from('Teams')
    .select('*')
    .eq('match_id', id);

  console.log(data);

  if (error) {
    return <p>ERROR: {error.message}</p>;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Pencil size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className='text-black'>
        <DialogHeader>
          <DialogTitle>Fixture Match</DialogTitle>
          <div>
            <div className='flex justify-between'>
              <h3>{data[0] && data[0].name}</h3>
              <h3>{data[1] && data[1].name}</h3>
            </div>
            <form></form>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
