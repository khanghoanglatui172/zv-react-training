import {put, take, fork} from "redux-saga/effects";
import {eventChannel} from 'redux-saga'
import {setNetworkStatus} from "../../reducers/network.slice";



function* startNetworkChanel (): any {
    const chanel =  eventChannel(emiter => {

        window.addEventListener('offline', () => {
            emiter(false)
        })
        window.addEventListener('online', () => {
            emiter(true)
        })

        return () => {
            window.removeEventListener('offline', () => {
                emiter(false)
            })
            window.removeEventListener('online', () => {
                emiter(true)
            })
        }
    })
    while (true) {
        const connectionInfo = yield take(chanel);
        yield put(setNetworkStatus(connectionInfo));
    }
}


function* networkSaga(): any {
    try {
        yield fork(startNetworkChanel);
    } catch(e) {
        console.log(e, 'error')
    }
}

export default networkSaga