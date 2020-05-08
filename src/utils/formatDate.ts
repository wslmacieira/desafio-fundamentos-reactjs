import { format } from 'date-fns';

const formatDate = (date: Date): string => format(new Date(date), 'MM/dd/yyyy');

export default formatDate;
