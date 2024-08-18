import { useItemStore } from '../stores/itemsStore';
import Button from './Button';

export default function ButtonGroup() {
  const MarkAllAsComplete = useItemStore((state) => state.MarkAllAsComplete);
  const MarkAllAsIncomplete = useItemStore(
    (state) => state.MarkAllAsIncomplete
  );
  const ResetToInitial = useItemStore((state) => state.ResetToInitial);
  const removeAllItems = useItemStore((state) => state.removeAllItems);

  return (
    <section className="button-group">
      <Button onClick={MarkAllAsComplete} buttontype="secondary">
        Mark all as complete
      </Button>
      <Button onClick={MarkAllAsIncomplete} buttontype="secondary">
        Mark all as incomplete
      </Button>
      <Button onClick={ResetToInitial} buttontype="secondary">
        Reset to initial
      </Button>
      <Button onClick={removeAllItems} buttontype="secondary">
        Remove all items
      </Button>
    </section>
  );
}
