const AboutUs = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-64px)] bg-gradient-to-r from-blue-100 to-purple-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        {/* Title */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-blue-600">About FitMind</h1>
          <p className="text-gray-500 mt-1 text-sm">
            Your all-in-one companion for{" "}
            <span className="font-medium">fitness</span>,{" "}
            <span className="font-medium">nutrition</span>, and{" "}
            <span className="font-medium">mental wellness</span>.
          </p>
        </div>

        {/* Description */}
        <div className="text-sm text-gray-700 space-y-3">
          <p>
            <strong>FitMind</strong> helps you track workouts, plan meals, and
            build strong mental habits — all in one place. We believe health is
            a balance between mind and body, and our app is designed to help you
            strengthen both.
          </p>

          <p>
            Whether you're just starting your journey or looking to push your
            limits, FitMind provides the tools, guidance, and motivation you
            need to succeed.
          </p>

          <p>
            Our mission is simple — make fitness and wellness accessible,
            enjoyable, and sustainable for everyone.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mt-5">
          <h2 className="text-base font-semibold text-blue-600 mb-2">
            Why Choose FitMind?
          </h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
            <li>Track your workouts and progress with ease</li>
            <li>Personalized nutrition guidance</li>
            <li>Guided tools for stress management & mindfulness</li>
            <li>Daily motivational quotes & reminders</li>
            <li>Clean, intuitive, and user-friendly design</li>
          </ul>
        </div>

        {/* Quote */}
        <div className="mt-6 text-center border-t pt-4">
          <p className="italic text-sm text-gray-500">
            “Your body achieves what your mind believes.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
