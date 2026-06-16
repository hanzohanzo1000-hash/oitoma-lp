import LineButton from "./LineButton";

export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-sky-300 to-sky-400 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          まずは無料相談から
        </h2>
        <p className="mt-4 text-sky-50 sm:text-lg">
          自分に合った仕事、正社員への道——
          <br className="hidden sm:inline" />
          20代のキャリア、一人で悩まないでください。
        </p>
        <div className="mt-8 flex justify-center">
          <LineButton
            size="lg"
            className="!bg-white !text-sky-500 hover:!bg-sky-50 !shadow-lg"
            label="LINEで無料相談する"
          />
        </div>
        <p className="mt-4 text-sm text-sky-100">
          相談無料・面談も無料・秘密厳守・しつこい勧誘なし
        </p>
      </div>
    </section>
  );
}
