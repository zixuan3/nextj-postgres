import { ParsedSearchParams } from '../search-params';
import { getTickets } from '../queries/get-tickets';
import { TicketItem } from './ticket-item';
import { TicketSearchInput } from './ticket-search-input';
import { TicketSortSelect } from './ticket-sort-select';

type TicketListProps = {
  userId?: string;
  searchParams: ParsedSearchParams;
};

const TicketList = async ({
  userId,
  searchParams,
}: TicketListProps) => {
  const tickets = await getTickets(userId, searchParams);

  return (
    <div className="space-y-4">
      <div className="flex gap-x-2 mb-1">
        <TicketSearchInput placeholder="Search tickets ..." />
        <TicketSortSelect
          options={[
            {
              sortKey: 'createdAt',
              sortValue: 'desc',
              label: 'Newest',
            },
            {
              sortKey: 'bounty',
              sortValue: 'desc',
              label: 'Bounty',
            },
          ]}
        />
      </div>

      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export { TicketList };
