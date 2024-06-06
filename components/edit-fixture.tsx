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

  if (error) {
    return <p>ERROR: {error.message}</p>;
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Pencil size={20} />
      </DialogTrigger>
      <DialogContent className='text-black'>
        <DialogHeader>
          <DialogTitle>Fixture Match</DialogTitle>
          <form action=''>
            <div>
              <div></div>
              <div></div>
            </div>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
