import React, { useState } from 'react';
import './slide.css';

const Slide = () => {
  const [slideNumber, setSlideNumber] = useState(1);

  const nextSlide = () => {
    if (slideNumber < 6) {
      setSlideNumber(slideNumber + 1);
    }
  };

  const prevSlide = () => {
    if (slideNumber > 1) {
      setSlideNumber(slideNumber - 1);
    }
  };

  return (
    <div className="slide-container">
      <div className="slide">
        {slideNumber === 1 && (
          <div className="slide-content">
            <h2>Create a project</h2>
            <div className="form-group">
              <label>Project name</label>
              <input type="text" placeholder="Enter project name here" />
            </div>
            <div className="form-group">
              <label>Client</label>
              <div className="client-selection">
                <select>
                  <option>Select a client</option>
                  <option>Client 1</option>
                  <option>Client 2</option>
                </select>
                <button className="new-client-button">+ New Client</button>
              </div>
            </div>
            <label>Dates</label>
            <div className="form-groupdate">
              <input type="date" />
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Notes</label>
              <textarea placeholder="Optional"></textarea>
            </div>
          </div>
        )}
        {slideNumber === 2 && (
          <div className="slide-content">
            <h2>Project type</h2>
            <div className='at1'>Don't panic- You can also customize this type in settings.</div>
            <div className="form-group3">
              <button className='btn1'>Time & Materials</button>
              <button className='btn1'>Fixed Fee</button>
              <button className='btn1'>Non-Billable</button>
            </div>
            <label>Hourly</label>
            we need hourly rates to track your project's billable amount.
            <div className="form-group1">
              <select>
                <option>Project Hourly Rate </option>
                <option>option 1</option>
                <option>option 2</option>
              </select>
              <input type="text" placeholder="₹ 12,678.00" />
            </div>
            <div className="form-group">
              <label>Budget</label>
              <div> we need hourly rates to track your project's billable amount.</div>
              <input type="text" placeholder="Hours per Person" />
              <div className='fl1'>
                <ol><input type="checkbox" /> Budget resets every month</ol>
                <ol><input type="checkbox" /> Send email alerts if project exceeds 80% of budget</ol>
              </div>
            </div>
          </div>
        )}
        {slideNumber === 3 && (
          <div className="slide-content">
            <h2>Select a view</h2>
            <p>You can also customize these views in settings</p>
            <div className="options-group">
              <div className="form-group">
                <input type="radio" id="list" name="view" />
                <label htmlFor="list">List</label>
              </div>
              <div className="form-group">
                <input type="radio" id="board" name="view" />
                <label htmlFor="board">Board</label>
              </div>
            </div>
          </div>
        )}
        {slideNumber === 4 && (
          <div className="slide-content">
            <h2>Who can manage projects</h2>
            <p>Don't panic — You can also customize these permissions in settings</p>
            <div className="options-group">
              <div className="form-group">
                <input type="radio" id="everyone" name="manage" />
                <label htmlFor="everyone">Everyone</label>
              </div>
              <div className="form-group">
                <input type="radio" id="admins" name="manage" />
                <label htmlFor="admins">Only Admins</label>
              </div>
              <div className="form-group">
                <input type="radio" id="specific" name="manage" />
                <label htmlFor="specific">Only to Specific people</label>
              </div>
            </div>
          </div>
        )}
        {slideNumber === 5 && (
          <div className="slide-content">
            <h2>Tasks</h2>
            <div className="form-group2">
              <input type="text" placeholder="Add a task" />
              <button>Add</button>
            </div>
            <form>
              {/* Add form elements here if needed */}
            </form>
            <ul>
              <li>
                <input type="checkbox" id="marketing" name="tasks" value="Marketing Website Design" />
                <label htmlFor="marketing">Marketing Website Design</label>
              </li>
              <li>
                <input type="checkbox" id="branding" name="tasks" value="Branding Design" />
                <label htmlFor="branding">Branding Design</label>
              </li>
              <li>
                <input type="checkbox" id="uiux" name="tasks" value="UI/UX Fundamentals" />
                <label htmlFor="uiux">UI/UX Fundamentals</label>
              </li>
              <li>
                <input type="checkbox" id="wireframe" name="tasks" value="Wireframe and Prototyping" />
                <label htmlFor="wireframe">Wireframe and Prototyping</label>
              </li>
              <li>
                <input type="checkbox" id="styleguide" name="tasks" value="Style Guide" />
                <label htmlFor="styleguide">Style Guide</label>
              </li>
              <li>
                <input type="checkbox" id="uxresearch" name="tasks" value="UX Research and Flows" />
                <label htmlFor="uxresearch">UX Research and Flows</label>
              </li>
              <li>
                <input type="checkbox" id="layout" name="tasks" value="Layout Design" />
                <label htmlFor="layout">Layout Design</label>
              </li>
            </ul>
          </div>
        )}
        {slideNumber === 6 && (
          <div className="slide-content">
            <h2>Team</h2>
            <div className="form-group4">
              <input type="text" placeholder="Invite or Add a person" />
              <button>Add</button>
            </div>
            <ul>
              <li>
                <input type="checkbox" id="steve-mathew" name="team" value="Steve Mathew" />
                <label htmlFor="steve-mathew">Steve Mathew</label>
              </li>
              <li>
                <input type="checkbox" id="robert-pattinson" name="team" value="Robert Pattinson" />
                <label htmlFor="robert-pattinson">Robert Pattinson</label>
              </li>
              <li>
                <input type="checkbox" id="steve-waugh" name="team" value="Steve Waugh" />
                <label htmlFor="steve-waugh">Steve Waugh</label>
              </li>
              <li>
                <input type="checkbox" id="fanny-russell" name="team" value="Fanny Russell" />
                <label htmlFor="fanny-russell">Fanny Russell</label>
              </li>
              <li>
                <input type="checkbox" id="rodney-meyer" name="team" value="Rodney Meyer" />
                <label htmlFor="rodney-meyer">Rodney Meyer</label>
              </li>
              <li>
                <input type="checkbox" id="ellen-simmons" name="team" value="Ellen Simmons" />
                <label htmlFor="ellen-simmons">Ellen Simmons</label>
              </li>
              <li>
                <input type="checkbox" id="virgie-kim" name="team" value="Virgie Kim" />
                <label htmlFor="virgie-kim">Virgie Kim</label>
              </li>
              <li>
                <input type="checkbox" id="emma-castro" name="team" value="Emma Castro" />
                <label htmlFor="emma-castro">Emma Castro</label>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="navigation-buttons">
        <button className="back-button" onClick={prevSlide}>Back</button>
        <button className="next-button" onClick={nextSlide}>
          {slideNumber === 6 ? 'Create Project' : 'Next'}
        </button>
      </div>
      <div className="slick-dots">
        {[1, 2, 3, 4, 5, 6].map(num => (
          <div
            key={num}
            className={`slick-dot ${num === slideNumber ? 'active' : ''}`}
            onClick={() => setSlideNumber(num)}
            ></div>
            ))}
          </div>
        </div>
      );
    };
    
    export default Slide;