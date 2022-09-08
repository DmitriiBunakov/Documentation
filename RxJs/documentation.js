//!================================================================================================================================================
//? Суть реактивного программирования - множественные подписки на конкретное изменение и управление данным состоянием из разных мест.
//? Реагирование на изменения.










//!================================================================================================================================================
//? /Observable/

//? Паттерн "Наблюдатель" (Observer) представляет поведенческий шаблон проектирования, который использует отношение "один ко многим". В этом отношении есть один наблюдаемый объект и множество наблюдателей. И при изменении наблюдаемого объекта автоматически происходит оповещение всех наблюдателей.
//? Обьект, за которым мы наблюдаем и реагируем на изменения.
//? Обьект, который принимает функцию, в которую как аргумент передается подписчик, где можно отправлять значения, ошибки, завершать все подписки и т.д.
//? Колбэк вызывается только при подписке на observable
//? Может иметь только одного подписчика, этим отличается от subject


//? При подписке передается колбэк, где можно предоставить 3 обработчки разных
//?     next - при отправке значения
//?     complete - при завершении
//?     error - при ошибке


//? методы некоторые Observable
//?     forEach - для каждого значения, полученного всеми подписчиками сделать что-то
//?     toPromise - создать промис для значения









//!================================================================================================================================================
//? /Subject/
//? Особый тип Observable, который может иметь множество подписчиков, а также может управляться из любого места

//? Создается обьект, на который можно подписаться много раз, а также с помощью api можно отправлять значения из любого места, будут уведомляться все подписчики

//?     next - отправить значение
//?     complete - закрыть все подписки и удалить обьект
//?     error - вызвать ошибку
//?     unsubscribe - запретить эмитить события
//?     observers - все подписчики





//?================================================================================================================================================
//? /BehaviorSubject/
//? Подтип, который хранит последнее значение, это значит, что при подписке будет сразу вызван подписчик со значением, которое хранит обьект

//?     getValue - получить хранящееся значения





//?================================================================================================================================================
//? /ReplaySubject/
//? Подтип, который может хранить указанное количество значений. Т.е. при подписке на него, он сразу выдаст указанное количество уже хранящихся значений, также можно указать какое время будут храниться данные
//? например тут будут храниться данные в течении 500 миллисекунд
/*
const subject = new ReplaySubject(500, 1000);
*/





//?================================================================================================================================================
//? /AsyncSubject/
//? Уведомляет подписчиков только в том случае, если он был завершен, и поставляет только последнее значение
//? Не хранит значение, если подписаться после закрытия, новые подписчики уведомлены не будут










//!================================================================================================================================================
//? /Operators/Операторы/
// https://rxjs.dev/guide/operators



//?================================================================================================================================================
//? /Создание/
//? of
//? создает observable из переданных значений и сразу эмитит их все



//? from
//? observable из итерируемого значения



//? fromEvent
//? observable из события на элемент



//? interval/timer
//? observable из времени



//? defer
//? отложенное создание, т.е. observable создается только при подписке, вызывается колбэк функция создания



//? range
//? эмитит значения с начального значения - по заданное



//? iif
//? в зависимости от колбэк функции возвращает один из двух observable
/*
const boolean = true;
const firstOrSecond = iif(
    () => boolean,
    of('first'),
    of('second'),
);
firstOrSecond.subscribe(value => console.log(value));
*/



//? combineLatest
//? при каждой отправке из зарегестрированных наблюдаемых, объединяет последние значения в массив



//? concat
//? принимает наблюдаемых, и подписывается на первый из них, как только первый закончится методом complete, будут вызваны все значения второго наблюдаемого
/*
const observable1 = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.complete();
});

const observable2 = new Observable(subscriber => {
    subscriber.next('first');
    subscriber.next('second');
    subscriber.next('third');
    subscriber.complete();
});

const concatedValue = concat(observable1, observable2);

concatedValue.subscribe(data => {
    console.log(data);
});
concatedValue.subscribe(data => {
    console.log(data);
});

1   2   3   first     second   third      1     2    3   first      second  third
*/



//? forkJoin
//? при завершении всех наблюдаемых переданных, объединяет последние значения в массив



//? merge
//? объединяет наблюдаемых в один поток и уведомляет в порядке приходящих значений



//? partition
//? принимает наблюдаемого, и функцию колбэк, которая обрабатывает значения, возвращает массив из двух наблюдаемых, в первом будут содержаться значения удовлетворишие условию в колбэк функции, во втором - нет, что то похожее на filter
/*
const [correctValues, incorrectValues] = partition(
    subject1,
    (value: any, index: number) => {
        return value.age >= 10;
    },
);

correctValues.subscribe(data => {
    console.log(data);
});

incorrectValues.subscribe(data => {
    console.log(data);
});

subject1.next({age: 10});
subject1.next({age: 15});
subject1.next({age: 8});
*/



//? race
//? подписывается на все наблюдаемые, и как только первое из них поставляет значение, подписка переходит на него, и отписываемся от всех остальных, и слушаем только данное наблюдаемое





//?================================================================================================================================================
//? /Преобразование/
//? zip
//? когда каждое из наблюдаемых отправит по значению, эти значения будут собраны в массив, затем когда во второй раз каждый снова отправит по значению, эти значения снова будут собраны в массив и т.д.
/*
const subject1 = new Subject();
const subject2 = new Subject();

zip(subject1, subject2)
    .subscribe(x => console.log(x));

subject1.next('subject1 - 1');
subject2.next('subject2 - 1');

subject1.next('subject1 - 2');
subject2.next('subject2 - 2');
*/



//? map
//? преобразует каждое поступающее значение из подписки и возвращает модифицированное значение



//? mapTo
//? преобразуется каждое значение к одному и тому же



//? tap
//? возможность сделать операции, никак не связанные со значениями подписки



//? switchMap
//? оператор применяется в pipe, возвращает новый наблюдаемый, на который потом и будет подписка происходить. Т.е. при получении значения первого наблюдаемого, будет подписка на наблюдаемое в switchMap, и слушать мы будет именно значения из switchMap. Если главный родительский наблюдаемый обьект снова отправит значение, то будет вызван заново switchMap, сработает новая подписка, а старая автоматически удалится, т.е. от switchMap наблюдаемого не надо отписываться
/*
fromEvent(document, 'click')
    .pipe(
        tap(() => {
            console.log('click');
        }),
        switchMap(() => {
            return interval(1000);
        }),
    )
    .subscribe(data => {
        console.log(data);
    });

click   1   2   3   click   1   2   3
*/



//? switchMapTo
//? преобразует к каждому дочернему значению
/*
fromEvent(document, 'click')
    .pipe(
        tap(() => {
            for (let i = 0; i < 1000; i++) {
                subject1.next(i);
            }
        }),
        switchMapTo(subject1),
    )
    .subscribe(data => {
        console.log(data);
    });
*/



//? mergeMap
//? очень похож на switchMap, кроме того, что этот оператор не отписывается от внутреннего наблюдаемого при отправке события из родительского. Он создает второй поток на следующее событие из родительского наблюдаемого и т.д
/*
fromEvent(document, 'click')
    .pipe(
        mergeMap(data => {
            console.log(data);
            return interval(1000).pipe(map(value => {return {data, value};}));
        }),
    )
    .subscribe(data => {
        console.log(data);
    });


const subject1 = new Subject();
const subject2 = new Subject();
subject1
    .pipe(
        mergeMap((data: any) => {
            return subject2.pipe(map(item => [data, item]));
        }),
    )
    .subscribe(data => {
        console.log(data);
    });

subject1.next('subject1 - 1');
subject2.next('subject2 - 1');
subject2.next('subject2 - 2');
*/



//? mergeMapTo
//? преобразует результат работы внутреннего наблюдаемого и не отписывается от него, при следующем родительском событии будет уже 2 внутрении подписки и т.д.
/*
fromEvent(document, 'click')
    .pipe(
        tap(() => {
            console.log('click');
            subject1.next(1);
            subject1.next(2);
            subject1.next(3);
        }),
        mergeMapTo(subject1),
    )
    .subscribe(data => {
        console.log(data);
    });
*/



//? concatMap
//? при событие в родительском будет подписка на внутреннее наблюдаемое, пока оно не кончится. Во время работы внутренней подписки, в родительскую будут приходить события, и они все будут ждать, пока не дочерняя подписка не будет завершена, как только она завершится будет отработано вторая и т.д.
/*
fromEvent(document, 'click')
    .pipe(
        concatMap(() => {
            return interval(1000).pipe(take(4));
        }),
    )
    .subscribe(data => {
        console.log(data);
    });
*/



//? concatMapTo
//? при родительском событии, подписывается на внутренний и возвращает результат его работы
/*
fromEvent(document, 'click')
    .pipe(
        concatMapTo(interval(1000)
            .pipe(take(2)),
        ),
    )
    .subscribe(data => {
        console.log(data);
    });


const subject1 = new Subject();
fromEvent(document, 'click')
    .pipe(
        tap(() => {
            setTimeout(() => {
                subject1.next(1);
                subject1.next(2);
                subject1.next(3);
            });
        }),
        concatMapTo(subject1),
    )
    .subscribe(data => {
        console.log(data);
    });
*/



//? scan
//? функция, похожая на reduce, аккумулирует значения предыдущие и новые на каждое событие
/*
fromEvent(document, 'click')
    .pipe(
        map(() => 1),
        scan((total, value) => {
            return total + value;
        }),
    )
    .subscribe(data => {
        console.log(data);
    });
*/



//? pairwise
//? объединяет в массив прошлое и текущее значение и т.д., на каждое событие. Т.е. создает кортеж
/*
fromEvent(document, 'click')
    .pipe(
        map(() => 1),
        scan((total, value) => total + value),
        pairwise(),
    )
    .subscribe(data => {
        console.log(data);
    });
*/



//? switchAll
//? объединяет потоки, при новом событии родительского, обнуляется дочерний
/*
fromEvent(document, 'click')
    .pipe(tap(() => console.log('click')))
    .pipe(
        map(() => interval(1000)),
        switchAll(),
    )
    .subscribe(x => console.log(x));
*/



//? concatAll
//? объединяет потоки в один
/*
fromEvent(document, 'click')
    .pipe(tap(() => console.log('click')))
    .pipe(
        map(() => interval(1000)),
        concatAll(),
    )
    .subscribe(x => console.log(x));
*/



//? mergeAll
//? объединяет потоки и на каждое родительское событие создается новый поток
/*
fromEvent(document, 'click')
    .pipe(tap(() => console.log('click')))
    .pipe(
        map(() => interval(1000)),
        mergeAll(),
    )
    .subscribe(x => console.log(x));
*/





//?================================================================================================================================================
//? /Фильтрация/
//? debounceTime
//? эмитит событие после определенного времени, если в этот момент наблюдамое снова заэмитит событие, то таймер обнулится
/*
fromEvent(document, 'click')
    .pipe(debounceTime(1000),)
    .subscribe(data => {
        console.log(data);
    });
*/



//? debounce
//? откладывает  выполнение, пока не будет заэмичено событие в дочернее наблюдаемое
/*
const subject1 = new Subject();
fromEvent(document, 'click')
    .pipe(
        debounce(() => {
            return subject1;
        }),
    )
    .subscribe(data => {
        console.log(data);
    });

setTimeout(() => {
    subject1.next(1);
}, 5000);
*/



//? distinctUntilChanged
//? пока не изменится значение, не будет срабатывать подписка
/*
fromEvent(document, 'click')
    .pipe(
        mapTo(1),
        distinctUntilChanged((x, y) => {
            return x === y;
        }),
    )
    .subscribe(data => {
        console.log(data);
    });
*/



//? distinct
//? не отправляет значение, если оно уже было в наблюдаемом
/*
of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5)
    .pipe(distinct())
    .subscribe(x => console.log(x));
*/



//? distinctUntilKeyChanged
//? по заданному ключу сравнивает значения, если не изменены, то ничего не делает
/*
of(
    {age: 4, name: 'Foo'},
    {age: 7, name: 'Bar'},
    {age: 5, name: 'Foo'},
    {age: 6, name: 'Foo'},
)
    .pipe(distinctUntilKeyChanged('name'))
    .subscribe(x => console.log(x));
*/



//? elementAt
//? один раз сработает подписка, когда событие будет сработано в установленный раз
/*

fromEvent(document, 'click')
    .pipe(elementAt(1),)
    .subscribe(data => {
        console.log(data);
    });
*/



//? filter
//? фильтрует значения



//? first
//? эмитит только первое событие и все



//? ignoreElements
//? игнорирует все входящие значения, и вызывает метод complete в подписке
/*
of(1)
    .pipe(ignoreElements(),)
    .subscribe({
        complete() {
            console.log('complete');
        },
    });
*/



//? last
//? эмитит только последнее значение из наблюдаемого



//? skip
//? пропускает указанное количество значений



//? skipLast
//? пропускает указанное количество значений с конца



//? skipUntil
//? пропускает, пока не будет заэмичено событие в данный оператор



//? skipWhile
//? пропускает, пока условие правдиво



//? take
//? берет определенное количество значений



//? takeLast
//? берет последнее значение



//? takeUntil
//? подписка, пока не будет заэмичено событие



//? takeWhile
//? подписка, пока правдиво выражение



//? throttleTime
//? пропускает события, пока не пройдет указанное количество времени после последнего события



//? delay
//? задержка до эмита





//?================================================================================================================================================
//? /Boolean/
//? every
//? каждое значение удовлетворяет



//? find
//? ищет такое то значение



//? findIndex
//? ищет значение такое то и возвращает индекс



//? isEmpty
//? возвращает true, если пустое значение





//?================================================================================================================================================
//? /Error/Обработка ошибок/

//? catchError
//? ловит ошибку и обрабатывает ее, а также отписывается от исходного наблюдаемого
/*
fromEvent(document, 'click')
    .pipe(
        tap(() => {
            throw new Error();
        }),
        catchError(() => {
            return of('ошибка');
        }),
    )
    .subscribe(data => {
        console.log(data);
    });
*/



//? throwError
//? выбрасывает ошибку дальше по коду
/*
throwError(() => error);
*/





//? retry
//? попробовать еще раз столько то раз