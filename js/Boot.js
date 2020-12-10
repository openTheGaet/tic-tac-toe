import { LoadViews } from './modules/LoadViews.js'
import { ActionsBase } from './actions/ActionsBase.js';
import { HandlerEvents } from './modules/HandlerEvents.js';
import { LeaveGame } from './modules/LeaveGame.js';

/**======================================================================
 * 1) Set LoadViews
 ========================================================================*/

new LoadViews();

/**======================================================================
 * 2) Set BaseActions
 ========================================================================*/

new ActionsBase();

/**======================================================================
 * 3) Set HandlerEvents
 ========================================================================*/

new HandlerEvents();

/**======================================================================
 * 4) Set LeaveGame
 ========================================================================*/

new LeaveGame();

