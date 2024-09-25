import {useAuth} from "../../hooks";

export const Dashboard = () => {
  const {user} = useAuth();
  console.log(user);
  return (
    <div className="flex flex-col justify-center items-center p-3 w-full">
      {/* main */}
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src={user.photoURL} />
              </div>
            </div>
          </div>
          <div className="stat-value text-md">--%</div>
          <div className="stat-title text-lg">Tasks done</div>
          <div className="stat-desc text-secondary text-lg">31 tasks remaining</div>
        </div>
      </div>
      <div className="stats shadow flex justify-center items-center">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
          <div className="stat-title">Lessons Taken</div>
          <div className="stat-value text-primary">8</div>
          <div className="stat-desc">Since Sep 2024</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <div className="stat-title text-md">Days Active</div>
          <div className="stat-value text-secondary">2</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>
      {/* Starpoints */}
      <div className="stats bg-purple-500 text-primary-content w-96">
        <div className="stat">
          <div className="stat-title text-gray-200">Star Points</div>
          <div className="stat-value">89,400</div>
          <div className="stat-actions">
            <button className="badge badge-lg badge-accent btn-success">VIP</button>
          </div>
        </div>
      </div>
      {/* Stat */}
      <div className="flex justify-around">
        <div className="stats stats-vertical shadow">
          <div className="stat">
            <div className="stat-title">Downloads</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-title">New Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
        <div className="stats stats-vertical shadow">
          <div className="stat">
            <div className="stat-title">Downloads</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-title">New Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};
