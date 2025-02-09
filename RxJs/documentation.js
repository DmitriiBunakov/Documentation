//!================================================================================================================================================
//? Суть реактивного программирования - множественные подписки на конкретное изменение и управление данным состоянием из разных мест.
//? Реагирование на изменения.
/*
**
***
****
*****/
//? /cold vs hot/
//? cold - создается поток на каждого подписчика
//? hot - один поток для всех подписчиков и начинает эмитить сразу, даже без подписчиков
/*
**
***
****
*****/
//!================================================================================================================================================
//? /Observable/

//? Паттерн "Наблюдатель" (Observer) представляет поведенческий шаблон проектирования, который использует отношение "один ко многим". В этом отношении есть один наблюдаемый объект и множество наблюдателей. И при изменении наблюдаемого объекта автоматически происходит оповещение всех наблюдателей.
//? Обьект, за которым мы наблюдаем и реагируем на изменения.
//? Обьект, который принимает функцию, в которую как аргумент передается подписчик, где можно отправлять значения, ошибки, завершать все подписки и т.д.
//? Колбэк вызывается только при подписке на observable
//? Может иметь только одного подписчика, этим отличается от subject
//? стрим сам по себе СИНХРОННЫЙ! и точка, единственно, можно настроить так, чтобы обработка была асинхронная


//? При подписке передается колбэк, где можно предоставить 3 обработчки разных
//?     next - при отправке значения
//?     complete - при завершении (даже если уже завершен поток, это вызовется, например мы подписались на EMPTY)
//?     error - при ошибке


//? методы некоторые Observable
//?     forEach - для каждого значения, полученного всеми подписчиками сделать что-то


//? closed - закрыт ли поток (complete)
//? hasError - есть ли ошибка (error())
//? isStopped - есть ли ошибка не обработанная или закрыт поток



//? При написании своего потока необходимо подчищать логику как в примере ниже, мы возвращаем функцию которая зачистит что нам нужно при unsubscribe вызове, если не очистить тут таймер, то мы всегда будем вызывать consumer.next(да, никто уже не будет на него подписан), но сама логика колбэка будет всегда выполняться, что не есть хорошо
/*
const s = new Observable(consumer => {
    const id = setInterval(() => {
        console.log('interval', consumer);
        consumer.next((id as any) + 1);
    }, 1000);

    return () => {
        clearInterval(id);
    };
});

const a = s.subscribe(console.log);

setTimeout(() => {
    a.unsubscribe();
}, 5000);
*/
/*
**
***
****
*****/
//!=============================================================================
//? /Subscription/
//? экземпляр подписки


//?     /add/ - метод, можно добавить в подписку другую подписку, и при закрытии подписки все добавленные подписки закроются
//? также если добавили подписку на уже закрытую подписку - тоже закроется
/*
import {Subscription, interval} from 'rxjs'

const s = new Subscription();
s.unsubscribe();

const t = interval(1000).subscribe(a => console.log(1));
s.add(t); //тут мы добавляем к закрытой подписке подписку и таймер даже ни разу не выстрелит
*/






//!================================================================================================================================================
//? /Subject/
//? Особый тип Observable, который может иметь множество подписчиков, а также может управляться из любого места

//? Создается обьект, на который можно подписаться много раз, а также с помощью api можно отправлять значения из любого места, будут уведомляться все подписчики

//?     next - отправить значение
//?     complete - закрыть все подписки и удалить обьект
//?     error - вызвать ошибку
//?     unsubscribe - запретить эмитить события(но не complete колбэк вызван не будет)
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



//?=============================================================================
//? /EMPTY/
//? создает пустой поток и сразу его завершает, то есть когда мы на него подпишемся - вызовется метод complete, если хотим чтобы выполнился хоть раз next - тогда нужно startWith/defaultIfEmpty оператор сделать



//? /NEVER/
//? создает поток который никогда не завершится, максимум что можно startWith применить чтобы хоть раз вызвался мето next



//? /startWith/
//? начинает поток, если еще не было эмитов до этого
//? должен быть в конце, чтобы навярняка он сработал, тк если перед этим будет debounceTime - то startWith может и не сработать, из за того, что придет новый эмит



//?================================================================================================================================================
//? /Создание/
//? /of/
//? создает observable из переданных значений и сразу эмитит их все



//? /from/
//? observable из итерируемого значения



//? /fromEvent/
//? observable из события на элемент



//? /interval/timer/
//? observable из времени



//? /defer/
//? отложенное создание, т.е. observable создается только при подписке, вызывается колбэк функция создания



//? /range/
//? эмитит значения с начального значения - по заданное




//? /generate/
//? цикл обычный в виде стримов



//? /iif/
//? в зависимости от колбэк функции возвращает один из двух observable при подписке
/*
const boolean = true;
const firstOrSecond = iif(
    () => boolean,
    of('first'),
    of('second'),
);
firstOrSecond.subscribe(value => console.log(value));
*/



//? /combineLatest/
//? при каждой отправке из зарегестрированных наблюдаемых, объединяет последние значения в массив



//? /concat/
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



//? /forkJoin/
//? при завершении всех наблюдаемых переданных, объединяет последние значения в массив



//? /merge/
//? объединяет наблюдаемых в один поток и уведомляет в порядке приходящих значений
/*
**
***
****
*****/
//? /partition/
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



//? /race/
//? подписывается на все наблюдаемые, и как только первое из них поставляет значение, подписка переходит на него, и отписываемся от всех остальных, и слушаем только данное наблюдаемое
/*
**
***
****
*****/
//!=============================================================================
//? /Преобразование/
/*
**
***
****
*****/
//?=============================================================================
//? /buffer/
//? кэширует данные до тех пор, пока стрим не заэмитит события который в buffer
/*
const clicks = fromEvent(document, 'click');
const intervalEvents = interval(1000);
const buffered = intervalEvents.pipe(buffer(clicks));
buffered.subscribe(x => console.log(x));
*/
//?=============================================================================
//? /bufferCount/
//? кэширует такое то количество
/*
**
***
****
*****/
//?=============================================================================
//? /bufferTime/
//? работает как интервал, кэширует данные в указанный период и после истечения выпускает их, затем снова процесс кэширования
/*
**
***
****
*****/
//?=============================================================================
//? /bufferWhen/
//? тоже самое что и buffer
/*
**
***
****
*****/
//? /zip/
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



//? /map/
//? преобразует каждое поступающее значение из подписки и возвращает модифицированное значение



//? /mapTo/
//? преобразуется каждое значение к одному и тому же



//? /tap/
//? возможность сделать операции, никак не связанные со значениями подписки



//? /exhaustMap/
//? при событии в главном, запускается дочерний поток, и пока дочерний не закончится - все родительские события пропускаются
/*
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  exhaustMap(() => interval(1000).pipe(take(5)))
);
result.subscribe(x => console.log(x));
click 0 1 2 3 4
*/
//?=============================================================================
//? /expand/
//? принимает в первый раз данные из потока и должен вернуть поток, но результат вернутого потока будет снова закинут в эту функцию и так далее
/*
**
***
****
*****/
//?=============================================================================
//? /groupBy/
//? группирует данные из потока по признаку
/*
**
***
****
*****/
//?=============================================================================
//? /switchMap/
//? оператор применяется в pipe, возвращает новый наблюдаемый, на который потом и будет подписка происходить. Т.е. при получении значения первого наблюдаемого, будет подписка на наблюдаемое в switchMap, и слушать мы будет именно значения из switchMap. Если главный родительский наблюдаемый обьект снова отправит значение, то будет вызван заново switchMap, сработает новая подписка, а старая автоматически удалится, т.е. от switchMap наблюдаемого не надо отписываться

//? complete в tap внутреннего потока не вызовется при switchMap, вызовется complete в tap, если takeUntil стоит выше tap оператора
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
/*
**
***
****
*****/
//?=============================================================================
//? /mergeMap/
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
/*
**
***
****
*****/
//?=============================================================================
//? /mergeScan/
//? оператор высшего порядка, который работает как reduce у массивов, берет аккумулятор(предыдущее значение) и текущее значение
/*
**
***
****
*****/
//?=============================================================================
//? /switchScan/
//? похоже на mergeScan
/*
**
***
****
*****/
//?=============================================================================
//? /concatMap/
//? при событие в родительском будет подписка на внутреннее наблюдаемое, пока оно не кончится. Во время работы внутренней подписки, в родительскую будут приходить события, и они все будут ждать, пока дочерняя подписка не будет завершена, как только она завершится будет отработано вторая и т.д.
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
/*
**
***
****
*****/
//?=============================================================================
//? /withLatestFrom/
//? берет последнее значение из потоков и комбинирует их
/*
**
***
****
*****/
//? /scan/
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



//? /pairwise/
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



//? /switchAll/
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



//? /concatAll/
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



//? /mergeAll/
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
/*
**
***
****
*****/
//?=============================================================================
//? /toArray/
//? в массив все элементы преобразует
/*
**
***
****
*****/
//?=============================================================================
//? /Фильтрация/
//? /sampleTime/
//? один раз в течении времени испускает значение последнее из главного
/*
**
***
****
*****/
//?=============================================================================
//? /sample/
//? принимает другой поток и эмитит последнее значение из основного когда notifier приходит значение
/*
**
***
****
*****/
//? /debounceTime/
//? после события пропустит дальше через определенный период, если в течении этого времени будет еще одно событие в главный поток, то таймер запустится заново, и так до бесконечности
/*
**
***
****
*****/
//? /debounce/
//? откладывает  выполнение, пока не будет заэмичено событие в дочернее наблюдаемое
/*
**
***
****
*****/
//? /throttleTime/
//? принимает обьект конфигурации
//? не чаще чем раз в n времени, в настройках можно указать, чтобы последнее значение тоже приходило по истечении времени, если оно пришло пока таймер игонрировал их
/*
**
***
****
*****/
//? /delay/
//? задержка до получения значеня в подписку
/*
**
***
****
*****/
//? /audit/
//? получает только последнее значение из потока в определенный промежуток
/*
**
***
****
*****/
//? /distinctUntilChanged/
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
/*
**
***
****
*****/
//? /distinct/
//? не отправляет значение, если оно уже было в наблюдаемом
/*
of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5)
    .pipe(distinct())
    .subscribe(x => console.log(x));
*/
/*
**
***
****
*****/
//? /distinctUntilKeyChanged/
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
/*
**
***
****
*****/
//? /elementAt/
//? один раз сработает подписка, когда событие будет сработано в установленный раз
/*
fromEvent(document, 'click')
    .pipe(elementAt(1),)
    .subscribe(data => {
        console.log(data);
    });
*/
/*
**
***
****
*****/
//? /filter/
//? фильтрует значения



//? /first/
//? эмитит только первое событие и все, очень похож на take(1), но можно передать колбэк функцию и сделать комбинацию filter/take(1) по сути

//? если поток пустой - выкинет ошибку (EMPTY/switchMap(() => EMPTY)), NEVER уже завершен и ошибки не будет
/*
of(1)
    .pipe(
        switchMap(() => EMPTY)
    )
    .pipe(
        first()
    )
    .subscribe(
        console.log,
        console.log,
        console.log
    );
*/



//? /ignoreElements/
//? игнорирует все входящие значения и пропускает только ошибку и complete
/*
of(1)
    .pipe(ignoreElements(),)
    .subscribe({
        complete() {
            console.log('complete');
        },
    });
*/



//? /last/
//? эмитит только последнее значение из наблюдаемого, либо принимает колбэк и будет работать грубо говоря как filter/last, но last не сработает, если поток не завершится


//? /skip/
//? пропускает указанное количество значений



//? /skipLast/
//? пропускает указанное количество значений с конца



//? /skipUntil/
//? пропускает, пока не будет заэмичено событие в данный оператор



//? /skipWhile/
//? пропускает, пока условие правдиво



//? /take/
//? берет определенное количество значений и после комплитит, никаких ошибок не выкидывает в отличие от first/last



//? /takeLast/
//? берет последнее значение



//? /takeUntil/
//? подписка, пока не будет заэмичено событие



//? /takeWhile/
//? подписка, пока правдиво выражение


//? /single/
//? без аргументов - ожидает что в потоке будет только одно значение и если больше/или вообще нет элементов - выкидывает ошибку
//? с аргументом колбэком - проверяет, в потоке одно такое значение или нет, если не одно - выкидывает ошибку, если одно - то его пропускает дальше



//? /finalize/
//? вызывается на complete(на ошибку тоже)
/*
**
***
****
*****/
//?================================================================================================================================================
//? /Boolean/
//? /every/
//? каждое значение удовлетворяет
/*
**
***
****
*****/
//? /find/
//? ищет такое то значение
/*
**
***
****
*****/
//? /findIndex/
//? ищет значение такое то и возвращает индекс
/*
**
***
****
*****/
//? /isEmpty/
//? возвращает true, если пустое значение
/*
**
***
****
*****/
//? /defaultIfEmpty/
//? если не пришло в поток и поток завершился - дефолтное значение будет закинуто
/*
**
***
****
*****/
//?================================================================================================================================================
//? /Error/Обработка ошибок/

//? /catchError/
//? ловит ошибку и обрабатывает ее, а также отписывается от исходного наблюдаемого
//? error, caught - ошибка и caught - тоже самое что и retry
//? при ошибке стрим заканчивается, и если у нас есть switchmap и если в запросе этом будет ошибка, то весь стрим упадет, но если мы хотим чтобы весь стрим не падал, мы можем внутри switchMap обработать ошибку, и вернуть например EMPTY, чтобы обработать внутреннюю ошибку запроса и наш весь стрим не упадет
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



//? /throwError/
//? выбрасывает ошибку дальше по коду
/*
throwError(() => error);
*/





//? /retry/
//? попробовать еще раз столько то раз, через такой то промежуток времени
/*
**
***
****
*****/
//!=============================================================================
//? /share/
//? делится со всеми подписчиками потоком, то есть если на поток сразу подписываются несколько наблюдателей - между ними будет разделен поток, если подписать через какое то время, а поток еще не завершится - также будет разделен поток
/*
const o = new Observable((s) => {
  console.log('START')

  s.next(1);
  s.next(2);

  setTimeout(() => {
    s.next(3);
  });

  setTimeout(() => {
    s.next(4);
  }, 1000);
}).pipe(
  share()
);

o.subscribe((a) => {
  console.log('first', a);
});

o.subscribe((a) => {
  console.log('second', a);
});

setTimeout(() => {
  o.subscribe((a) => {
    console.log('third', a);
  });
}, 500)
*/

//!=============================================================================
//? /shareReplay/
//? как share - только при подписке новые подписчики получат старые данные из буфера, если подписались позже, то подписчик получит старые данные, что уже были заэмичены, используется под капотом replaySubject
//? countRef = true, от потока отписывается если нет подписчиков больше, false - поток будет вечно работать
/*
const source = interval(1000).pipe(
    tap((x) => console.log('Processing: ', x)),
    take(6),
    // share(),
    shareReplay(2),
);

source.subscribe((x) => console.log('1: ', x));

setTimeout(() => {
    source.subscribe((x) => console.log('2: ', x));
}, 4000);

*/
/*
**
***
****
*****/
//?=============================================================================
//? /observeOn/
//? после этого оператора дальнейшее выполнение операторов будет с задержкой, каждый такой оператор будет задерживать выполнение следующих операторов
/*
**
***
****
*****/
//?=============================================================================
//? /subscribeOn/
//? похож на observeOn, но откладывает только время подписки, то есть подпишемся через сколько то там времени и операторы тоже начнут выполняться сразу после подписки
/*
**
***
****
*****/
//? /Собственный оператор/
//? Можно также написать собственные операторы с использованием pipe, либо полностью с 0