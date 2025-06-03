import Notification from "./Notification";

export default function NotificationContenetor() {
    return (
        <section id="notificationsContenetor" className="bg-[#3b3b3b] hidden flex-col gap-2 absolute h-[33rem] w-[24rem] p-3 rounded-lg z-10 top-[5rem] right-[31.2rem]">
            <article className="w-full pb-1 flex items-center justify-between border-b border-white">
                <h3 className="text-white text-[1.4rem] font-medium">Notificaciones</h3>
                <button id="notificationClose">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6c0 -.852 .986 -1.297 1.623 -.783l.084 .076l6 6a1 1 0 0 1 .083 1.32l-.083 .094l-6 6l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002l-.059 -.002l-.058 -.005l-.06 -.009l-.052 -.01l-.108 -.032l-.067 -.027l-.132 -.07l-.09 -.065l-.081 -.073l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057l-.002 -12.059z" /></svg>
                </button>
            </article>

            <article className="h-full w-full flex flex-col gap-2 overflow-auto">
                <Notification />
            </article>
        </section>
    );
}
