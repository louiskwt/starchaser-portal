import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../hooks";
import {getGravatarURL} from "../../utils";

export const Dashboard = () => {
  const {user, logout, profile, getUserProfile} = useAuth();

  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  useEffect(() => {
    const loadProfile = () => {
      getUserProfile(user);
    };
    return () => loadProfile();
  }, []);

  const {taskCount, completedTask, activeDays, lessonTaken, lessonDate, readingAvg, writingAvg, listeningAvg, speakingAvg, grammarAvg, dictationAvg, previousAvg, name} = profile || {};
  const {prevReadingAvg, prevWritingAvg, prevListeningAvg, prevSpeakingAvg, prevGrammarAvg, prevDictationAvg} = previousAvg || {};
  console.log(profile);
  const firstLessonDate = (() => {
    if (lessonDate && lessonDate instanceof Date && !isNaN(lessonDate)) {
      return lessonDate.toDate().toDateString();
    }
    return "";
  })();
  const profileImgUrl = user.photoURL || getGravatarURL(user.email);
  return (
    <div className="flex flex-col justify-center items-center p-3 w-full">
      <div className="flex flex-start text-left mb-4">
        <h1 className="font-bold text-2xl">Hello {name}</h1>
      </div>
      {/* main */}
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src={profileImgUrl} />
              </div>
            </div>
          </div>
          <div className="stat-value text-md">{taskCount > 0 ? taskCount / completedTask : 0}%</div>
          <div className="stat-title text-lg">Tasks done</div>
          <div className="stat-desc text-secondary text-lg">{taskCount} tasks remaining</div>
        </div>
      </div>
      <div className="stats shadow flex justify-center items-center">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
          <div className="stat-title">Lessons Attended</div>
          <div className="stat-value text-primary">{lessonTaken}</div>
          <div className="stat-desc">Since {firstLessonDate}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <div className="stat-title text-md">Days Active</div>
          <div className="stat-value text-secondary">{activeDays}</div>
        </div>
      </div>

      {/* Stat */}
      <div className="flex justify-around">
        <div className="stats stats-vertical shadow">
          <div className="stat">
            <div className="stat-title">Reading Average</div>
            <div className="stat-value">{readingAvg}</div>
            <div className="stat-desc">{readingAvg - prevReadingAvg}</div>
          </div>
          <div className="stat">
            <div className="stat-title">Listening Average</div>
            <div className="stat-value">{listeningAvg}</div>
            <div className="stat-desc">↘︎ {listeningAvg - prevListeningAvg}</div>
          </div>
          <div className="stat">
            <div className="stat-title">Dictation Avarage</div>
            <div className="stat-value">{dictationAvg}</div>
            <div className="stat-desc">↗︎ {dictationAvg - prevDictationAvg}</div>
          </div>
        </div>
        <div className="stats stats-vertical shadow">
          <div className="stat">
            <div className="stat-title">Writing Average</div>
            <div className="stat-value">{writingAvg}</div>
            <div className="stat-desc">↗︎ {writingAvg - prevWritingAvg}</div>
          </div>
          <div className="stat">
            <div className="stat-title">Speaking Average</div>
            <div className="stat-value">{speakingAvg}</div>
            <div className="stat-desc">{speakingAvg - prevSpeakingAvg}</div>
          </div>

          <div className="stat">
            <div className="stat-title">Grammar Average</div>
            <div className="stat-value">{grammarAvg}</div>
            <div className="stat-desc">↘︎ {grammarAvg - prevGrammarAvg}</div>
          </div>
        </div>
      </div>
      <li className="text-xl btn btn-ghost" onClick={() => handleLogout()}>
        Logout
      </li>
    </div>
  );
};
