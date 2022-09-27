import { from, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

//emit ({name: 'Joe', age: 31}, {name: 'Bob', age:25})

interface ITenant {
  id: string;
  serialId: string;
  name: string;
}

const tenants$ = from([
  {
    id: '3c6dff30-417c-4f28-acb1-5b17ae114c5d',
    serialId: 'UNCLTEST0NSRPYE0',
    name: '80zaJZvZ',
  },
  {
    id: '16697ec0-bbb0-429b-9ac6-d54fd08089b7',
    serialId: 'UNCLTEST0NSRPYE0',
    name: 'Tenant A',
  },
  {
    id: 'f417a2c4-f99c-11ea-8caa-eb014c4bbe3b',
    serialId: 'UNCLTEST0NSRPYE0',
    name: 'Tenant A',
  },
  {
    id: '0045fd7a-f99d-11ea-8670-70024c4bbe3b',
    serialId: 'UNCLTEST0NSRPYE0',
    name: 'Tenant B',
  },
] as unknown as ITenant[]);
//filter out people with age under 30
const example = tenants$.pipe(filter((tenant) => tenant.name === 'Tenant A'));

//output: "Over 30: Joe"
const subscribe = example.subscribe((val) =>
  console.log(`Over 30: ${val.name}`)
);
