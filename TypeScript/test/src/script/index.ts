type TTest<T extends number | string> = T extends number? 'number': 'string';
type TTest2 = TTest<2>
type TTest3 = TTest<''>
