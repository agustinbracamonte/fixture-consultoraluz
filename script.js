// Todas las fechas oficiales están almacenadas usando UTC-3 (Hora Argentina) como ancla inicial. 
        // El sistema las convertirá a la franja elegida.
        
        // Dieciseisavos de Final (Ronda de 32)
        const initialMatches = {
            1: { teamA: { name: 'Alemania', flag: '🇩🇪' }, teamB: { name: 'Paraguay', flag: '🇵🇾' }, isoDate: '2026-06-29T17:30:00-03:00', venue: 'Boston' },
            2: { teamA: { name: 'Francia', flag: '🇫🇷' }, teamB: { name: 'Suecia', flag: '🇸🇪' }, isoDate: '2026-06-30T18:00:00-03:00', venue: 'NY/NJ' },
            3: { teamA: { name: 'Sudáfrica', flag: '🇿🇦' }, teamB: { name: 'Canadá', flag: '🇨🇦' }, isoDate: '2026-06-28T16:00:00-03:00', venue: 'Los Ángeles' },
            4: { teamA: { name: 'Países Bajos', flag: '🇳🇱' }, teamB: { name: 'Marruecos', flag: '🇲🇦' }, isoDate: '2026-06-29T22:00:00-03:00', venue: 'Monterrey' },
            5: { teamA: { name: 'Portugal', flag: '🇵🇹' }, teamB: { name: 'Croacia', flag: '🇭🇷' }, isoDate: '2026-07-02T17:00:00-03:00', venue: 'Toronto' },
            6: { teamA: { name: 'España', flag: '🇪🇸' }, teamB: { name: 'Austria', flag: '🇦🇹' }, isoDate: '2026-07-02T16:00:00-03:00', venue: 'Los Ángeles' },
            7: { teamA: { name: 'Estados Unidos', flag: '🇺🇸' }, teamB: { name: 'Bosnia y H.', flag: '🇧🇦' }, isoDate: '2026-07-01T21:00:00-03:00', venue: 'Santa Clara' },
            8: { teamA: { name: 'Bélgica', flag: '🇧🇪' }, teamB: { name: 'Senegal', flag: '🇸🇳' }, isoDate: '2026-07-01T17:00:00-03:00', venue: 'Seattle' },
            
            9: { teamA: { name: 'Brasil', flag: '🇧🇷' }, teamB: { name: 'Japón', flag: '🇯🇵' }, isoDate: '2026-06-29T14:00:00-03:00', venue: 'Houston' },
            10: { teamA: { name: 'Costa de Marfil', flag: '🇨🇮' }, teamB: { name: 'Noruega', flag: '🇳🇴' }, isoDate: '2026-06-30T14:00:00-03:00', venue: 'Dallas' },
            11: { teamA: { name: 'México', flag: '🇲🇽' }, teamB: { name: 'Ecuador', flag: '🇪🇨' }, isoDate: '2026-06-30T21:00:00-03:00', venue: 'CDMX' },
            12: { teamA: { name: 'Inglaterra', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' }, teamB: { name: 'RD Congo', flag: '🇨🇩' }, isoDate: '2026-07-01T13:00:00-03:00', venue: 'Atlanta' },
            13: { teamA: { name: 'Argentina', flag: '🇦🇷' }, teamB: { name: 'Cabo Verde', flag: '🇨🇻' }, isoDate: '2026-07-03T16:00:00-03:00', venue: 'Miami' },
            14: { teamA: { name: 'Australia', flag: '🇦🇺' }, teamB: { name: 'Egipto', flag: '🇪🇬' }, isoDate: '2026-07-03T13:00:00-03:00', venue: 'Dallas' },
            15: { teamA: { name: 'Suiza', flag: '🇨🇭' }, teamB: { name: 'Irán', flag: '🇮🇷' }, isoDate: '2026-07-02T00:00:00-03:00', venue: 'Vancouver' },
            16: { teamA: { name: 'Colombia', flag: '🇨🇴' }, teamB: { name: 'Ghana', flag: '🇬🇭' }, isoDate: '2026-07-03T20:30:00-03:00', venue: 'Kansas City' },
        };

        // Flujo del Torneo: Octavos a Final (Con fechas y estadios exactos)
        const matchFlow = {
            17: { sourceA: 1, sourceB: 2, title: 'Octavos de Final', isoDate: '2026-07-04T14:00:00-03:00', venue: 'Houston' },
            18: { sourceA: 3, sourceB: 4, title: 'Octavos de Final', isoDate: '2026-07-04T18:00:00-03:00', venue: 'Filadelfia' },
            19: { sourceA: 5, sourceB: 6, title: 'Octavos de Final', isoDate: '2026-07-05T17:00:00-03:00', venue: 'NY/NJ' },
            20: { sourceA: 7, sourceB: 8, title: 'Octavos de Final', isoDate: '2026-07-05T21:00:00-03:00', venue: 'CDMX' },
            21: { sourceA: 9, sourceB: 10, title: 'Octavos de Final', isoDate: '2026-07-06T16:00:00-03:00', venue: 'Dallas' },
            22: { sourceA: 11, sourceB: 12, title: 'Octavos de Final', isoDate: '2026-07-06T21:00:00-03:00', venue: 'Seattle' },
            23: { sourceA: 13, sourceB: 14, title: 'Octavos de Final', isoDate: '2026-07-07T13:00:00-03:00', venue: 'Atlanta' },
            24: { sourceA: 15, sourceB: 16, title: 'Octavos de Final', isoDate: '2026-07-07T16:00:00-03:00', venue: 'Vancouver' },
            
            25: { sourceA: 17, sourceB: 18, title: 'Cuartos de Final', isoDate: '2026-07-09T17:00:00-03:00', venue: 'Boston' },
            26: { sourceA: 19, sourceB: 20, title: 'Cuartos de Final', isoDate: '2026-07-10T16:00:00-03:00', venue: 'Los Ángeles' },
            27: { sourceA: 21, sourceB: 22, title: 'Cuartos de Final', isoDate: '2026-07-11T18:00:00-03:00', venue: 'Miami' },
            28: { sourceA: 23, sourceB: 24, title: 'Cuartos de Final', isoDate: '2026-07-11T22:00:00-03:00', venue: 'Kansas City' },
            
            29: { sourceA: 25, sourceB: 26, title: 'Semifinales', isoDate: '2026-07-14T16:00:00-03:00', venue: 'Dallas' },
            30: { sourceA: 27, sourceB: 28, title: 'Semifinales', isoDate: '2026-07-15T16:00:00-03:00', venue: 'Atlanta' },
            
            31: { sourceA: 29, sourceB: 30, title: 'GRAN FINAL', isoDate: '2026-07-19T16:00:00-03:00', venue: 'NY/NJ' },
            32: { sourceA: 29, sourceB: 30, title: 'Tercer Puesto', isoDate: '2026-07-18T18:00:00-03:00', venue: 'Miami', isLosers: true }
        };

        const layoutColumnsDesktop = [
            { id: 'col-1', matches: [1,2,3,4,5,6,7,8] }, 
            { id: 'col-2', matches: [17,18,19,20] },     
            { id: 'col-3', matches: [25,26] },           
            { id: 'col-4', matches: [29] },              
            { id: 'col-5', matches: [31, 'trophy', 32], class: 'center' }, 
            { id: 'col-6', matches: [30] },              
            { id: 'col-7', matches: [27,28] },           
            { id: 'col-8', matches: [21,22,23,24] },     
            { id: 'col-9', matches: [9,10,11,12,13,14,15,16] } 
        ];

        const layoutColumnsMobile = [
            { id: 'col-1', matches: [1,2,3,4,5,6,7,8, 9,10,11,12,13,14,15,16] }, 
            { id: 'col-2', matches: [17,18,19,20, 21,22,23,24] },     
            { id: 'col-3', matches: [25,26, 27,28] },           
            { id: 'col-4', matches: [29, 30] },              
            { id: 'col-5', matches: [31, 'trophy', 32], class: 'center' }
        ];

        let isMobileView = window.innerWidth <= 1024;

        // Memoria y Estado
        let state = JSON.parse(localStorage.getItem('mundial2026_pro')) || { 
            scores: {}, 
            penalties: {},
            manualTeams: {},
            timezone: 'America/Argentina/Buenos_Aires'
        };

        // Restablecer el selector visual al cargar
        document.getElementById('tz-select').value = state.timezone;

        function saveData() {
            localStorage.setItem('mundial2026_pro', JSON.stringify(state));
        }

        function resetFixture() {
            if(window.confirm('¿Borrar todos los resultados y empezar de cero?')) {
                const currentTz = state.timezone;
                state = { scores: {}, penalties: {}, manualTeams: {}, timezone: currentTz };
                saveData();
                renderBracket();
            }
        }

        function changeTimezone(newTz) {
            state.timezone = newTz;
            saveData();
            renderBracket();
        }

        // Formateador dinámico de Fechas basado en Zona Horaria
        function formatMatchDate(isoString) {
            const date = new Date(isoString);
            const formatter = new Intl.DateTimeFormat('es-AR', {
                timeZone: state.timezone,
                weekday: 'short',
                day: 'numeric',
                month: 'short',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });
            
            let formatted = formatter.format(date).replace(/,/g, '');
            // Capitalizar
            formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1);
            return formatted;
        }

        function getWinnerFromScore(matchId) {
            let sA = state.scores[`m${matchId}a`];
            let sB = state.scores[`m${matchId}b`];
            if (sA === undefined || sA === '' || sB === undefined || sB === '') return null;
            
            sA = parseInt(sA);
            sB = parseInt(sB);

            if (sA > sB) return 'A';
            if (sB > sA) return 'B';
            
            let pen = state.penalties[`m${matchId}`];
            if (pen) return pen;
            return null;
        }

        function getTeamForSlot(matchId, side) {
            if (matchId <= 16) return initialMatches[matchId][side === 'A' ? 'teamA' : 'teamB'];

            const flow = matchFlow[matchId];
            const sourceId = side === 'A' ? flow.sourceA : flow.sourceB;

            const scoreWinner = getWinnerFromScore(sourceId);
            if (scoreWinner) {
                let advanceSide = scoreWinner;
                if (flow.isLosers) advanceSide = (scoreWinner === 'A') ? 'B' : 'A';
                return getTeamForSlot(sourceId, advanceSide);
            }

            const manualVal = state.manualTeams[`m${matchId}${side}`];
            if (manualVal) {
                try { return JSON.parse(decodeURIComponent(manualVal)); } catch(e){}
            }

            return { name: 'Por definir', flag: '❔' };
        }

        function generateGoalOptions(currentVal) {
            let html = `<option value="">-</option>`;
            for(let i = 0; i <= 99; i++) {
                html += `<option value="${i}" ${currentVal === String(i) ? 'selected' : ''}>${i}</option>`;
            }
            return html;
        }

        function renderTeamSelector(matchId, side) {
            if (matchId <= 16) {
                const team = initialMatches[matchId][side === 'A' ? 'teamA' : 'teamB'];
                return `
                    <div class="team-display">
                        <span class="flag">${team.flag}</span>
                        <span class="team-name">${team.name}</span>
                    </div>`;
            }

            const flow = matchFlow[matchId];
            const sourceId = side === 'A' ? flow.sourceA : flow.sourceB;
            
            const teamA = getTeamForSlot(sourceId, 'A');
            const teamB = getTeamForSlot(sourceId, 'B');
            const currentSelected = getTeamForSlot(matchId, side);

            const valA = encodeURIComponent(JSON.stringify(teamA));
            const valB = encodeURIComponent(JSON.stringify(teamB));

            let optionsHtml = `<option value="">❔ Seleccionar...</option>`;
            
            if (teamA.name !== 'Por definir') {
                const sel = (currentSelected.name === teamA.name) ? 'selected' : '';
                optionsHtml += `<option value="${valA}" ${sel}>${teamA.flag} ${teamA.name}</option>`;
            }
            if (teamB.name !== 'Por definir') {
                const sel = (currentSelected.name === teamB.name) ? 'selected' : '';
                optionsHtml += `<option value="${valB}" ${sel}>${teamB.flag} ${teamB.name}</option>`;
            }

            const isLocked = getWinnerFromScore(sourceId) !== null;

            return `
                <select class="team-select" 
                        onchange="handleManualTeam(${matchId}, '${side}', this.value)"
                        ${isLocked ? 'disabled' : ''}>
                    ${optionsHtml}
                </select>
            `;
        }

        // Manejadores globales
        window.handleScoreChange = function(matchId, side, value) {
            state.scores[`m${matchId}${side.toLowerCase()}`] = value;
            let sA = state.scores[`m${matchId}a`];
            let sB = state.scores[`m${matchId}b`];
            if (sA !== sB || sA === '' || sB === '') delete state.penalties[`m${matchId}`];
            
            saveData();
            renderBracket();
        }

        window.handlePenalty = function(matchId, winnerStr) {
            state.penalties[`m${matchId}`] = winnerStr;
            saveData();
            renderBracket();
        }

        window.handleManualTeam = function(matchId, side, encodedObj) {
            if (encodedObj === "") delete state.manualTeams[`m${matchId}${side}`];
            else state.manualTeams[`m${matchId}${side}`] = encodedObj;
            saveData();
            renderBracket();
        }

        function renderMatchCard(matchId) {
            let scoreA = state.scores[`m${matchId}a`] !== undefined ? state.scores[`m${matchId}a`] : '';
            let scoreB = state.scores[`m${matchId}b`] !== undefined ? state.scores[`m${matchId}b`] : '';
            let penWinner = state.penalties[`m${matchId}`];

            let isTie = (scoreA !== '' && scoreB !== '' && scoreA === scoreB);
            
            // Lógica de fecha dinámica y estadios para todos los partidos
            let dateStr = "";
            let matchData = matchId <= 16 ? initialMatches[matchId] : matchFlow[matchId];
            
            const formattedDate = formatMatchDate(matchData.isoDate);
            
            if (matchId <= 16) {
                dateStr = `<span class="match-date">${formattedDate}</span> | ${matchData.venue}`;
            } else {
                dateStr = `<span class="match-date">${matchData.title}</span> ${formattedDate} | ${matchData.venue}`;
            }

            let finalClass = matchId === 31 ? 'final' : '';

            return `
                <div class="match-card ${finalClass}" id="match-${matchId}">
                    <div class="match-header">${dateStr}</div>
                    
                    <div class="team-row">
                        <div class="team-selector">
                            ${renderTeamSelector(matchId, 'A')}
                        </div>
                        <button class="penalty-btn ${penWinner === 'A' ? 'active' : ''}" 
                                style="display: ${isTie ? 'flex' : 'none'}" 
                                onclick="handlePenalty(${matchId}, 'A')" title="Ganó por penales">P</button>
                        <select class="goal-select" onchange="handleScoreChange(${matchId}, 'A', this.value)">
                            ${generateGoalOptions(String(scoreA))}
                        </select>
                    </div>
                    
                    <div class="team-row">
                        <div class="team-selector">
                            ${renderTeamSelector(matchId, 'B')}
                        </div>
                        <button class="penalty-btn ${penWinner === 'B' ? 'active' : ''}" 
                                style="display: ${isTie ? 'flex' : 'none'}" 
                                onclick="handlePenalty(${matchId}, 'B')" title="Ganó por penales">P</button>
                        <select class="goal-select" onchange="handleScoreChange(${matchId}, 'B', this.value)">
                            ${generateGoalOptions(String(scoreB))}
                        </select>
                    </div>
                </div>
            `;
        }

        function applyLayoutAndScale() {
            const mobileThreshold = 1024;
            const isNowMobile = window.innerWidth <= mobileThreshold;
            
            if (isNowMobile !== isMobileView) {
                isMobileView = isNowMobile;
                renderBracket();
                return; // renderBracket calls applyLayoutAndScale again via setTimeout
            }

            const container = document.getElementById('bracket-board');
            const wrapper = document.getElementById('scroll-area');
            
            if (isMobileView) {
                container.style.transform = 'none';
                container.style.minWidth = 'max-content';
                wrapper.style.justifyContent = 'flex-start';
                // Adjust wrapper height to auto so it flows normally
                wrapper.style.minHeight = 'auto';
            } else {
                container.style.minWidth = '1750px';
                wrapper.style.justifyContent = 'center';
                
                const availableWidth = wrapper.clientWidth;
                // Add 40px padding protection
                const scale = Math.min(1, (availableWidth - 40) / 1750);
                container.style.transform = `scale(${scale})`;
                
                // Adjust height of wrapper based on scaled container
                const rect = container.getBoundingClientRect();
                wrapper.style.minHeight = `${rect.height + 80}px`; // 80px for padding
            }
            drawSVGConnectorLines();
        }

        function renderBracket() {
            const container = document.getElementById('columns-wrapper');
            container.innerHTML = '';

            const currentLayout = isMobileView ? layoutColumnsMobile : layoutColumnsDesktop;

            currentLayout.forEach(col => {
                const columnDiv = document.createElement('div');
                columnDiv.className = `column ${col.class || ''}`;

                col.matches.forEach(item => {
                    if (item === 'trophy') {
                        columnDiv.innerHTML += `
                            <div class="trophy-container">
                                <div style="font-weight:900; letter-spacing: 2px; color: var(--gold);">CAMPEÓN DEL MUNDO</div>
                                <div class="trophy">🏆</div>
                            </div>
                        `;
                    } else {
                        columnDiv.innerHTML += renderMatchCard(item);
                    }
                });
                container.appendChild(columnDiv);
            });

            setTimeout(applyLayoutAndScale, 50); 
        }

        function drawSVGConnectorLines() {
            const svg = document.getElementById('lines-svg');
            const container = document.getElementById('bracket-board');
            if (!svg || !container) return;

            svg.innerHTML = '';
            const containerRect = container.getBoundingClientRect();

            Object.keys(matchFlow).forEach(targetId => {
                const targetCard = document.getElementById(`match-${targetId}`);
                if (!targetCard) return;

                const flow = matchFlow[targetId];
                const sources = [flow.sourceA, flow.sourceB];

                sources.forEach(sourceId => {
                    const sourceCard = document.getElementById(`match-${sourceId}`);
                    if (!sourceCard) return;

                    const sRect = sourceCard.getBoundingClientRect();
                    const tRect = targetCard.getBoundingClientRect();

                    const isLeft = sRect.left < tRect.left;

                    let startX = isLeft ? (sRect.right - containerRect.left) : (sRect.left - containerRect.left);
                    let startY = (sRect.top - containerRect.top) + (sRect.height / 2);

                    let endX = isLeft ? (tRect.left - containerRect.left) : (tRect.right - containerRect.left);
                    let endY = (tRect.top - containerRect.top) + (tRect.height / 2);

                    if (isLeft) { startX += 5; endX -= 5; } else { startX -= 5; endX += 5; }

                    const midX = startX + (endX - startX) / 2;

                    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    const curve = `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;
                    
                    path.setAttribute('d', curve);
                    path.setAttribute('fill', 'none');
                    path.setAttribute('stroke', '#4a4b62'); 
                    path.setAttribute('stroke-width', '2');
                    
                    svg.appendChild(path);
                });
            });
        }

        window.addEventListener('resize', () => {
            applyLayoutAndScale();
        });

        // Deslizamiento táctil en PC
        const slider = document.getElementById('scroll-area');
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => isDown = false);
        slider.addEventListener('mouseup', () => isDown = false);
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });

        // Inicio
        document.addEventListener('DOMContentLoaded', renderBracket);
