const tg = window.Telegram.WebApp;

export function useTelegram() {

    const onClose = () =>{
        tg.close();
      }

    return {
        tg,
        onClose,
        queryId: tg.initDataUnsafe?.query_id,
    }
}