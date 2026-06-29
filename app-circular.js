// Todas las fechas oficiales están almacenadas usando UTC-3 (Hora Argentina) como ancla inicial. 
        // El sistema las convertirá a la franja elegida.
        
        // Dieciseisavos de Final (Ronda de 32)
        const initialMatches = {
            1: { teamA: { name: 'Alemania', flag: '🇩🇪' }, teamB: { name: 'Paraguay', flag: '🇵🇾' }, isoDate: '2026-06-29T17:30:00-03:00', venue: 'Boston' },
            2: { teamA: { name: 'Francia', flag: '🇫🇷' }, teamB: { name: 'Suecia', flag: '🇸🇪' }, isoDate: '2026-06-30T18:00:00-03:00', venue: 'NY/NJ' },
            3: { teamA: { name: 'Sudáfrica', flag: '🇿🇦' }, teamB: { name: 'Canadá', flag: '🇨🇦' }, isoDate: '2026-06-28T16:00:00-03:00', venue: 'Los Ángeles', scoreA: '0', scoreB: '1', isFinished: true },
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
        let userForcedDesktop = false;
        let isCircularView = true;

        window.toggleView = function() {
            if (isCircularView) return; // Don't allow toggle if circular is active
            
            userForcedDesktop = !userForcedDesktop;
            document.body.classList.toggle('force-desktop', userForcedDesktop);
            const btn = document.querySelector('.btn-toggle-view');
            if (btn) {
                btn.innerHTML = userForcedDesktop ? '📱 Vista Móvil' : '🖥️ Vista Completa';
            }
            
            isMobileView = window.innerWidth <= 1024 && !userForcedDesktop;
            renderBracket(true);
        };

        window.toggleCircularView = function() {
            isCircularView = !isCircularView;
            
            const btnCirc = document.querySelector('.btn-circular');
            if (btnCirc) {
                btnCirc.innerHTML = isCircularView ? '🔄 Tradicional' : '🔄 Circular';
            }

            if (!isCircularView) {
                // Al volver de la vista circular, siempre forzamos la vista completa
                userForcedDesktop = true;
                document.body.classList.add('force-desktop');
                isMobileView = false;
                const btnToggle = document.querySelector('.btn-toggle-view');
                if (btnToggle) {
                    btnToggle.innerHTML = '📱 Vista Móvil';
                }
            }
            
            const btnToggle = document.querySelector('.btn-toggle-view');
            if (btnToggle) {
                btnToggle.style.display = isCircularView ? 'none' : (window.innerWidth <= 1024 ? 'inline-block' : 'none');
            }
            
            document.getElementById('columns-wrapper').style.display = isCircularView ? 'none' : 'flex';
            document.getElementById('circular-wrapper').style.display = isCircularView ? 'block' : 'none';
            document.getElementById('mobile-tabs').style.display = (isCircularView || userForcedDesktop) ? 'none' : 'flex';
            
            renderBracket(true);
        };

        window.openMatchModal = function(matchId) {
            const container = document.getElementById('modal-match-container');
            if (container) {
                // Remove highlight classes from the rendered string since it's just a string, we can just replace it or let it be
                container.innerHTML = renderMatchCard(matchId);
                // Bind events for selectors inside modal
                document.getElementById('match-modal').style.display = 'flex';
            }
        };

        window.closeMatchModal = function() {
            document.getElementById('match-modal').style.display = 'none';
            // Re-render to update circular view with new scores
            renderBracket(true);
        };

        window.renderCircularBracket = function() {
            const circContainer = document.getElementById('circular-wrapper');
            circContainer.innerHTML = '';
            
            const boardSize = 2000;
            const center = boardSize / 2;
            
            const board = document.getElementById('bracket-board');
            board.style.minWidth = boardSize + 'px';
            board.style.height = boardSize + 'px';
            
            function getLeaves(mId) {
                if (mId <= 16) return [{id: mId, team: 'A'}, {id: mId, team: 'B'}];
                const flow = matchFlow[mId];
                if (!flow) return [];
                return getLeaves(flow.sourceA).concat(getLeaves(flow.sourceB));
            }
            const leaves = getLeaves(31);
            
            const nodeAngles = {};
            leaves.forEach((leaf, i) => {
                const angle = i * (2 * Math.PI / 32) - Math.PI / 2; // Offset by -90deg so match 31 is vertical? Actually, symmetric is fine.
                nodeAngles[leaf.id + '_' + leaf.team] = angle;
                
                const team = initialMatches[leaf.id][leaf.team === 'A' ? 'teamA' : 'teamB'];
                const r = 900;
                const x = center + r * Math.cos(angle);
                const y = center + r * Math.sin(angle);
                
                const el = document.createElement('div');
                el.className = 'circular-leaf';
                el.style.left = x + 'px';
                el.style.top = y + 'px';
                el.innerHTML = team.flag;
                el.title = team.name;
                circContainer.appendChild(el);
            });
            
            const matchNodes = {};
            for (let i = 1; i <= 31; i++) {
                if (i <= 16) {
                    let avg = (nodeAngles[i + '_A'] + nodeAngles[i + '_B']) / 2;
                    matchNodes[i] = { angle: avg, r: 750 };
                } else {
                    const flow = matchFlow[i];
                    if (!flow) continue;
                    const nodeA = matchNodes[flow.sourceA];
                    const nodeB = matchNodes[flow.sourceB];
                    if (!nodeA || !nodeB) continue;
                    
                    let avg = (nodeA.angle + nodeB.angle) / 2;
                    if (i === 31) avg = 0; 
                    else if (Math.abs(nodeA.angle - nodeB.angle) > Math.PI) avg += Math.PI;
                    
                    let r = 0;
                    if (i >= 17 && i <= 24) r = 550;
                    else if (i >= 25 && i <= 28) r = 350;
                    else if (i >= 29 && i <= 30) r = 150;
                    else if (i === 31) r = 0;
                    
                    matchNodes[i] = { angle: avg, r: r };
                }
            }
            
            svg.removeAttribute('viewBox');
            svg.setAttribute('width', boardSize);
            svg.setAttribute('height', boardSize);
            svg.style.width = boardSize + 'px';
            svg.style.height = boardSize + 'px';
            
            let svgContent = '';
            
            Object.keys(matchNodes).forEach(id => {
                const matchId = parseInt(id);
                const node = matchNodes[matchId];
                
                const x = center + node.r * Math.cos(node.angle);
                const y = center + node.r * Math.sin(node.angle);
                
                const el = document.createElement('div');
                el.className = 'circular-node';
                el.style.left = x + 'px';
                el.style.top = y + 'px';
                
                let size = 30;
                if (matchId >= 17) size = 35;
                if (matchId >= 25) size = 40;
                if (matchId >= 29) size = 45;
                if (matchId === 31) size = 90;
                
                el.style.width = size + 'px';
                el.style.height = size + 'px';
                el.onclick = () => openMatchModal(matchId);
                
                const winnerSide = getWinnerFromScore(matchId);
                let winnerTeam = null;
                if (winnerSide) winnerTeam = getTeamForSlot(matchId, winnerSide);
                
                if (winnerTeam) {
                    el.classList.add('winner');
                    if (winnerTeam.flag !== '❔') {
                        el.innerHTML = `<span style="font-size: ${size * 0.6}px">${winnerTeam.flag}</span>`;
                    }
                }
                
                if (matchId === 31) {
                    el.classList.add('final-node');
                    if (winnerTeam && winnerTeam.flag !== '❔') {
                        el.innerHTML = `<span style="font-size: 50px">${winnerTeam.flag}</span>`;
                    } else {
                        el.innerHTML = `<span style="font-size: 50px">🏆</span>`;
                    }
                }
                
                circContainer.appendChild(el);
                
                if (matchId <= 16) {
                    const aA = nodeAngles[matchId + '_A'];
                    const xA = center + 900 * Math.cos(aA);
                    const yA = center + 900 * Math.sin(aA);
                    const colorA = winnerSide === 'A' ? 'var(--brand)' : 'var(--border)';
                    svgContent += `<line x1="${xA}" y1="${yA}" x2="${x}" y2="${y}" stroke="${colorA}" stroke-width="${winnerSide === 'A' ? 4 : 2}" />`;
                    
                    const aB = nodeAngles[matchId + '_B'];
                    const xB = center + 900 * Math.cos(aB);
                    const yB = center + 900 * Math.sin(aB);
                    const colorB = winnerSide === 'B' ? 'var(--brand)' : 'var(--border)';
                    svgContent += `<line x1="${xB}" y1="${yB}" x2="${x}" y2="${y}" stroke="${colorB}" stroke-width="${winnerSide === 'B' ? 4 : 2}" />`;
                } else {
                    const flow = matchFlow[matchId];
                    const childA = matchNodes[flow.sourceA];
                    const childB = matchNodes[flow.sourceB];
                    
                    const xA = center + childA.r * Math.cos(childA.angle);
                    const yA = center + childA.r * Math.sin(childA.angle);
                    const winA = getWinnerFromScore(flow.sourceA);
                    const colorA = (winA && getTeamForSlot(flow.sourceA, winA).name === getTeamForSlot(matchId, 'A').name && winnerSide) ? 'var(--brand)' : 'var(--border)';
                    const swA = colorA === 'var(--brand)' ? 4 : 2;
                    svgContent += `<line x1="${xA}" y1="${yA}" x2="${x}" y2="${y}" stroke="${colorA}" stroke-width="${swA}" />`;
                    
                    const xB = center + childB.r * Math.cos(childB.angle);
                    const yB = center + childB.r * Math.sin(childB.angle);
                    const winB = getWinnerFromScore(flow.sourceB);
                    const colorB = (winB && getTeamForSlot(flow.sourceB, winB).name === getTeamForSlot(matchId, 'B').name && winnerSide) ? 'var(--brand)' : 'var(--border)';
                    const swB = colorB === 'var(--brand)' ? 4 : 2;
                    svgContent += `<line x1="${xB}" y1="${yB}" x2="${x}" y2="${y}" stroke="${colorB}" stroke-width="${swB}" />`;
                }
            });
            
            svg.innerHTML = svgContent;
            
            setTimeout(() => {
                applyLayoutAndScale();
            }, 50);
        }

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

        window.resetFixture = function(btn) {
            if (!btn) btn = document.querySelector('.btn-clear');
            if (!btn.classList.contains('confirming')) {
                btn.classList.add('confirming');
                btn.innerHTML = '⚠️ ¿Confirmar?';
                // Resetear de vuelta tras 3 segundos si no se vuelve a presionar
                btn.timeoutId = setTimeout(() => {
                    btn.classList.remove('confirming');
                    btn.innerHTML = '🗑️ Limpiar Fixture';
                }, 3000);
            } else {
                clearTimeout(btn.timeoutId);
                btn.classList.remove('confirming');
                btn.innerHTML = '🗑️ Limpiar Fixture';
                
                const currentTz = state.timezone;
                state = { scores: {}, penalties: {}, manualTeams: {}, timezone: currentTz };
                saveData();
                renderBracket(true);
            }
        }

        function changeTimezone(newTz) {
            state.timezone = newTz;
            saveData();
            renderBracket(true);
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
            let matchData = matchId <= 16 ? initialMatches[matchId] : matchFlow[matchId];
            let sA = (matchData && matchData.isFinished) ? matchData.scoreA : state.scores[`m${matchId}a`];
            let sB = (matchData && matchData.isFinished) ? matchData.scoreB : state.scores[`m${matchId}b`];
            
            if (sA === undefined || sA === '' || sB === undefined || sB === '') return null;
            
            sA = parseInt(sA);
            sB = parseInt(sB);

            if (sA > sB) return 'A';
            if (sB > sA) return 'B';
            
            let pen = (matchData && matchData.isFinished) ? matchData.penWinner : state.penalties[`m${matchId}`];
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
                optionsHtml += `<option value="${valA}" ${sel}>${teamA.name}</option>`;
            }
            if (teamB.name !== 'Por definir') {
                const sel = (currentSelected.name === teamB.name) ? 'selected' : '';
                optionsHtml += `<option value="${valB}" ${sel}>${teamB.name}</option>`;
            }

            const isLocked = getWinnerFromScore(sourceId) !== null;
            
            if (isLocked && currentSelected && currentSelected.name !== 'Por definir') {
                return `
                    <div class="team-display">
                        <span class="flag">${currentSelected.flag}</span>
                        <span class="team-name">${currentSelected.name}</span>
                    </div>`;
            }

            let displayFlag = currentSelected.name !== 'Por definir' && currentSelected.flag ? currentSelected.flag : '⚪';
            let displayName = currentSelected.name !== 'Por definir' ? currentSelected.name : 'Seleccionar...';

            return `
                <div style="position: relative; width: 100%; display: flex;">
                    <div class="team-display" style="justify-content: space-between; flex: 1;">
                        <div style="display: flex; align-items: center; gap: 8px; overflow: hidden;">
                            <span class="flag">${displayFlag}</span>
                            <span class="team-name" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${displayName}</span>
                        </div>
                        <span style="font-size: 0.7em; color: var(--text-muted); padding-left: 5px;">▼</span>
                    </div>
                    <select class="team-select" onchange="handleManualTeam(${matchId}, '${side}', this.value)" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; cursor: pointer;">
                        ${optionsHtml}
                    </select>
                </div>`;
        }

        // Manejadores globales
        window.handleScoreChange = function(matchId, side, value) {
            state.scores[`m${matchId}${side.toLowerCase()}`] = value;
            let sA = state.scores[`m${matchId}a`];
            let sB = state.scores[`m${matchId}b`];
            if (sA !== sB || sA === '' || sB === '') delete state.penalties[`m${matchId}`];
            
            saveData();
            renderBracket();
            
            setTimeout(() => {
                const card = document.getElementById(`match-${matchId}`);
                if (card) {
                    card.classList.remove('animate-pop');
                    void card.offsetWidth;
                    card.classList.add('animate-pop');
                }
            }, 60);
        }

        window.handlePenalty = function(matchId, winnerStr) {
            state.penalties[`m${matchId}`] = winnerStr;
            saveData();
            renderBracket();
            
            setTimeout(() => {
                const card = document.getElementById(`match-${matchId}`);
                if (card) {
                    card.classList.remove('animate-pop');
                    void card.offsetWidth;
                    card.classList.add('animate-pop');
                }
            }, 60);
        }

        window.handleManualTeam = function(matchId, side, encodedObj) {
            if (encodedObj === "") delete state.manualTeams[`m${matchId}${side}`];
            else state.manualTeams[`m${matchId}${side}`] = encodedObj;
            saveData();
            renderBracket();
        }

        window.activeHighlight = null;
        window.toggleMatchHighlight = function(e, matchId) {
            // Ignorar clicks si provienen de botones o selects internos
            if (e.target.tagName === 'SELECT' || e.target.tagName === 'BUTTON' || e.target.tagName === 'OPTION') return;
            
            if (window.activeHighlight === matchId) {
                handleMatchHover(matchId, false);
                window.activeHighlight = null;
            } else {
                if (window.activeHighlight) handleMatchHover(window.activeHighlight, false);
                handleMatchHover(matchId, true);
                window.activeHighlight = matchId;
            }
        };

        window.handleMatchHover = function(matchId, isHover) {
            if (isCircularView) return;
            
            function traceBackward(id) {
                const paths = document.querySelectorAll(`path[data-target="${id}"]`);
                paths.forEach(p => {
                    p.classList.toggle('highlight-path', isHover);
                    // Mover el path al final para que se dibuje por encima de los demás
                    if (isHover && p.parentNode) p.parentNode.appendChild(p);
                    traceBackward(p.getAttribute('data-source'));
                });
            }
            function traceForward(id) {
                const paths = document.querySelectorAll(`path[data-source="${id}"]`);
                paths.forEach(p => {
                    p.classList.toggle('highlight-path', isHover);
                    if (isHover && p.parentNode) p.parentNode.appendChild(p);
                    traceForward(p.getAttribute('data-target'));
                });
            }
            traceBackward(matchId);
            traceForward(matchId);
        };

        window.resetMatch = function(matchId) {
            delete state.scores[`m${matchId}a`];
            delete state.scores[`m${matchId}b`];
            delete state.penalties[`m${matchId}`];
            delete state.manualTeams[`m${matchId}A`];
            delete state.manualTeams[`m${matchId}B`];
            saveData();
            renderBracket();
        }

        function renderMatchCard(matchId) {
            let matchData = matchId <= 16 ? initialMatches[matchId] : matchFlow[matchId];
            let isFinished = matchData && matchData.isFinished === true;

            let scoreA = isFinished ? matchData.scoreA : (state.scores[`m${matchId}a`] !== undefined ? state.scores[`m${matchId}a`] : '');
            let scoreB = isFinished ? matchData.scoreB : (state.scores[`m${matchId}b`] !== undefined ? state.scores[`m${matchId}b`] : '');
            let penWinner = isFinished ? matchData.penWinner : state.penalties[`m${matchId}`];

            let isTie = (scoreA !== '' && scoreB !== '' && scoreA === scoreB);
            
            // Lógica de fecha dinámica y estadios para todos los partidos
            let dateStr = "";

            
            const formattedDate = formatMatchDate(matchData.isoDate);
            
            if (matchId <= 16) {
                dateStr = `<span class="match-date">${formattedDate}</span> | ${matchData.venue}`;
            } else {
                dateStr = `<span class="match-date">${matchData.title}</span> ${formattedDate} | ${matchData.venue}`;
            }

            let finalClass = matchId === 31 ? 'final' : '';
            let pairClass = '';
            
            if (matchId <= 24) {
                let pairIndex = matchId <= 16 ? Math.ceil(matchId / 2) : Math.ceil((matchId - 16) / 2);
                if (pairIndex % 2 !== 0) {
                    pairClass = 'pair-tint';
                }
            }

            let resetBtnHtml = isFinished ? '' : `<button class="reset-match-btn" onclick="resetMatch(${matchId})" title="Reiniciar este partido">↺</button>`;
            let disabledAttr = isFinished ? 'disabled' : '';

            return `
                <div class="match-card ${finalClass} ${pairClass}" id="match-${matchId}"
                     onclick="toggleMatchHighlight(event, ${matchId})"
                     onmouseenter="handleMatchHover(${matchId}, true)" 
                     onmouseleave="handleMatchHover(${matchId}, false)">
                    <div class="match-header">
                        ${dateStr}
                        ${resetBtnHtml}
                    </div>
                    
                    <div class="team-row">
                        <div class="team-selector">
                            ${renderTeamSelector(matchId, 'A')}
                        </div>
                        <button class="penalty-btn ${penWinner === 'A' ? 'active' : ''}" 
                                style="display: ${isTie ? 'flex' : 'none'};" 
                                ${isFinished ? 'disabled' : `onclick="handlePenalty(${matchId}, 'A')"`} title="Ganó por penales">P</button>
                        <select class="goal-select" onchange="handleScoreChange(${matchId}, 'A', this.value)" ${disabledAttr}>
                            ${generateGoalOptions(String(scoreA))}
                        </select>
                    </div>
                    
                    <div class="team-row">
                        <div class="team-selector">
                            ${renderTeamSelector(matchId, 'B')}
                        </div>
                        <button class="penalty-btn ${penWinner === 'B' ? 'active' : ''}" 
                                style="display: ${isTie ? 'flex' : 'none'};" 
                                ${isFinished ? 'disabled' : `onclick="handlePenalty(${matchId}, 'B')"`} title="Ganó por penales">P</button>
                        <select class="goal-select" onchange="handleScoreChange(${matchId}, 'B', this.value)" ${disabledAttr}>
                            ${generateGoalOptions(String(scoreB))}
                        </select>
                    </div>
                </div>
            `;
        }

        function applyLayoutAndScale() {
            const mobileThreshold = 1024;
            const isNowMobile = window.innerWidth <= mobileThreshold && !userForcedDesktop;
            
            if (isNowMobile !== isMobileView) {
                isMobileView = isNowMobile;
                renderBracket(true);
                return; // renderBracket calls applyLayoutAndScale again via setTimeout
            }

            const container = document.getElementById('circular-wrapper');
            const wrapper = document.getElementById('scroll-area');
            
            if (isMobileView) {
                container.style.transform = 'none';
                container.style.minWidth = 'max-content';
                wrapper.style.justifyContent = 'flex-start';
                // Adjust wrapper height to auto so it flows normally
                wrapper.style.height = 'auto';
                wrapper.style.minHeight = 'auto';
                wrapper.style.overflowX = 'auto';
            } else {
                // Permitimos que el contenedor tome su ancho natural
                container.style.minWidth = '2000px';
                
                // Resetear transformaciones para calcular tamaños reales
                container.style.transform = 'none';
                container.style.margin = '0px';
                wrapper.style.justifyContent = 'flex-start'; // Evita el bug de recorte izquierdo en flexbox
                wrapper.style.height = 'auto';
                
                const availableWidth = wrapper.clientWidth;
                const unscaledWidth = container.scrollWidth;
                
                // Calculamos la escala basada en el ancho REAL del contenido
                let scale = Math.min(1, (availableWidth - 40) / unscaledWidth);
                
                if (userForcedDesktop && window.innerWidth <= mobileThreshold) {
                    scale = Math.max(0.5, scale); // Mantener un tamaño legible en celular
                }
                
                container.style.transformOrigin = 'top left';
                container.style.transform = `scale(${scale})`;
                
                const scaledWidth = unscaledWidth * scale;
                
                if (scale < 1 || (userForcedDesktop && window.innerWidth <= mobileThreshold)) {
                    // Centrar visualmente usando márgenes, evitando scroll negativo
                    let leftover = Math.max(0, availableWidth - scaledWidth);
                    let marginLeft = leftover / 2;
                    
                    if (userForcedDesktop && window.innerWidth <= mobileThreshold) {
                        marginLeft = 20; // Solo un pequeño padding en móvil, el resto es scroll
                    }
                    
                    container.style.marginLeft = `${marginLeft}px`;
                    
                    // Eliminar espacio muerto generado por el escalado CSS
                    const emptySpace = unscaledWidth - scaledWidth;
                    const emptyHeight = container.scrollHeight - (container.scrollHeight * scale);
                    container.style.marginRight = `-${emptySpace}px`;
                    container.style.marginBottom = `-${emptyHeight}px`;
                } else {
                    container.style.marginLeft = 'auto';
                    container.style.marginRight = 'auto';
                    container.style.marginBottom = '0px';
                }
                
                // Adjust height of wrapper based on scaled container
                const rect = container.getBoundingClientRect();
                wrapper.style.height = `${rect.height + 80}px`; // force wrapper to shrink to scaled height
                
                // Allow scrolling and grabbing regardless of scale
                wrapper.style.overflowX = 'auto';
                wrapper.style.cursor = 'grab';
            }
            drawSVGConnectorLines();
        }

        function renderBracket(forceRecreate = false) {
            const container = document.getElementById('columns-wrapper');
            
            // Si se fuerza la recreación o el contenedor está vacío, construimos el DOM base
            if (forceRecreate || !container || !container.children.length) {
                container.innerHTML = '';
                const currentLayout = isMobileView ? layoutColumnsMobile : layoutColumnsDesktop;

                currentLayout.forEach((col, index) => {
                    const columnDiv = document.createElement('div');
                    columnDiv.className = `column ${col.class || ''} col-delay-${index}`;
                    
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

                setTimeout(() => {
                    if (window.twemoji) {
                        twemoji.parse(document.getElementById('columns-wrapper'), {
                            folder: 'svg',
                            ext: '.svg'
                        });
                    }
                    applyLayoutAndScale();
                    
                    // Redibujar y recalcular escala y altura final después de que terminen las animaciones CSS (0.8s) y la carga de imágenes
                    setTimeout(applyLayoutAndScale, 400);
                    setTimeout(applyLayoutAndScale, 900);
                }, 50); 
                return;
            }

            // Actualización incremental (evita destruir el DOM y perder el estado de desplazamiento)
            const currentLayout = isMobileView ? layoutColumnsMobile : layoutColumnsDesktop;
            currentLayout.forEach(col => {
                col.matches.forEach(item => {
                    if (item === 'trophy') return;

                    const card = document.getElementById(`match-${item}`);
                    if (!card) return;

                    const scoreA = state.scores[`m${item}a`] !== undefined ? state.scores[`m${item}a`] : '';
                    const scoreB = state.scores[`m${item}b`] !== undefined ? state.scores[`m${item}b`] : '';
                    const penWinner = state.penalties[`m${item}`];
                    const isTie = (scoreA !== '' && scoreB !== '' && scoreA === scoreB);

                    // 1. Actualizar los selectores de equipo (por si cambiaron por clasificación)
                    const teamRows = card.querySelectorAll('.team-row');
                    const teamSelectorA = teamRows[0] ? teamRows[0].querySelector('.team-selector') : null;
                    const teamSelectorB = teamRows[1] ? teamRows[1].querySelector('.team-selector') : null;
                    if (teamSelectorA) teamSelectorA.innerHTML = renderTeamSelector(item, 'A');
                    if (teamSelectorB) teamSelectorB.innerHTML = renderTeamSelector(item, 'B');

                    // 2. Actualizar los marcadores seleccionados
                    const selectA = teamRows[0] ? teamRows[0].querySelector('.goal-select') : null;
                    const selectB = teamRows[1] ? teamRows[1].querySelector('.goal-select') : null;
                    if (selectA) selectA.value = scoreA;
                    if (selectB) selectB.value = scoreB;

                    // 3. Actualizar botones de penales
                    const penBtnA = teamRows[0] ? teamRows[0].querySelector('.penalty-btn') : null;
                    const penBtnB = teamRows[1] ? teamRows[1].querySelector('.penalty-btn') : null;
                    if (penBtnA) {
                        penBtnA.style.display = isTie ? 'flex' : 'none';
                        penBtnA.className = `penalty-btn ${penWinner === 'A' ? 'active' : ''}`;
                    }
                    if (penBtnB) {
                        penBtnB.style.display = isTie ? 'flex' : 'none';
                        penBtnB.className = `penalty-btn ${penWinner === 'B' ? 'active' : ''}`;
                    }
                });
            });

            // Parsear Twemoji en los selectores actualizados y redibujar líneas
            if (window.twemoji) {
                twemoji.parse(document.getElementById('columns-wrapper'), {
                    folder: 'svg',
                    ext: '.svg'
                });
            }
            applyLayoutAndScale();
        }

function renderBracket(forceRecreate = false) {
            if (isCircularView) {
                renderCircularBracket();
                return;
            }

            const container = document.getElementById('columns-wrapper');
            
            // Si se fuerza la recreaci├│n o el contenedor est├í vac├¡o, construimos el DOM base
            if (forceRecreate || !container || !container.children.length) {
                container.innerHTML = '';
                const currentLayout = isMobileView ? layoutColumnsMobile : layoutColumnsDesktop;

                currentLayout.forEach((col, index) => {
                    const columnDiv = document.createElement('div');
                    columnDiv.className = `column ${col.class || ''} col-delay-${index}`;
                    
                    col.matches.forEach(item => {
                        if (item === 'trophy') {
                            columnDiv.innerHTML += `
                                <div class="trophy-container">
                                    <div style="font-weight:900; letter-spacing: 2px; color: var(--gold);">CAMPE├ôN DEL MUNDO</div>
                                    <div class="trophy">­ƒÅå</div>
                                </div>
                            `;
                        } else {
                            columnDiv.innerHTML += renderMatchCard(item);
                        }
                    });
                    container.appendChild(columnDiv);
                });

                setTimeout(() => {
                    if (window.twemoji) {
                        twemoji.parse(document.getElementById('columns-wrapper'), {
                            folder: 'svg',
                            ext: '.svg'
                        });
                    }
                    applyLayoutAndScale();
                    
                    // Redibujar y recalcular escala y altura final despu├®s de que terminen las animaciones CSS (0.8s) y la carga de im├ígenes
                    setTimeout(applyLayoutAndScale, 400);
                    setTimeout(applyLayoutAndScale, 900);
                }, 50); 
                return;
            }

            // Actualizaci├│n incremental (evita destruir el DOM y perder el estado de desplazamiento)
            const currentLayout = isMobileView ? layoutColumnsMobile : layoutColumnsDesktop;
            currentLayout.forEach(col => {
                col.matches.forEach(item => {
                    if (item === 'trophy') return;

                    const card = document.getElementById(`match-${item}`);
                    if (!card) return;

                    const scoreA = state.scores[`m${item}a`] !== undefined ? state.scores[`m${item}a`] : '';
                    const scoreB = state.scores[`m${item}b`] !== undefined ? state.scores[`m${item}b`] : '';
                    const penWinner = state.penalties[`m${item}`];
                    const isTie = (scoreA !== '' && scoreB !== '' && scoreA === scoreB);

                    // 1. Actualizar los selectores de equipo (por si cambiaron por clasificaci├│n)
                    const teamRows = card.querySelectorAll('.team-row');
                    const teamSelectorA = teamRows[0] ? teamRows[0].querySelector('.team-selector') : null;
                    const teamSelectorB = teamRows[1] ? teamRows[1].querySelector('.team-selector') : null;
                    if (teamSelectorA) teamSelectorA.innerHTML = renderTeamSelector(item, 'A');
                    if (teamSelectorB) teamSelectorB.innerHTML = renderTeamSelector(item, 'B');

                    // 2. Actualizar los marcadores seleccionados
                    const selectA = teamRows[0] ? teamRows[0].querySelector('.goal-select') : null;
                    const selectB = teamRows[1] ? teamRows[1].querySelector('.goal-select') : null;
                    if (selectA) selectA.value = scoreA;
                    if (selectB) selectB.value = scoreB;

                    // 3. Actualizar botones de penales
                    const penBtnA = teamRows[0] ? teamRows[0].querySelector('.penalty-btn') : null;
                    const penBtnB = teamRows[1] ? teamRows[1].querySelector('.penalty-btn') : null;
                    if (penBtnA) {
                        penBtnA.style.display = isTie ? 'flex' : 'none';
                        penBtnA.className = `penalty-btn ${penWinner === 'A' ? 'active' : ''}`;
                    }
                    if (penBtnB) {
                        penBtnB.style.display = isTie ? 'flex' : 'none';
                        penBtnB.className = `penalty-btn ${penWinner === 'B' ? 'active' : ''}`;
                    }
                });
            });

            // Parsear Twemoji en los selectores actualizados y redibujar l├¡neas
            if (window.twemoji) {
                twemoji.parse(document.getElementById('columns-wrapper'), {
                    folder: 'svg',
                    ext: '.svg'
                });
            }
            applyLayoutAndScale();
        }

        function getRelativeCoords(elem, container) {
            const eRect = elem.getBoundingClientRect();
            const cRect = container.getBoundingClientRect();
            
            let scale = 1;
            try {
                const style = window.getComputedStyle(container);
                const matrix = style.transform || style.webkitTransform || style.mozTransform;
                if (matrix && matrix !== 'none') {
                    const parts = matrix.split('(')[1].split(')')[0].split(',');
                    const a = parseFloat(parts[0]);
                    const b = parseFloat(parts[1]);
                    scale = Math.sqrt(a * a + b * b);
                }
            } catch (e) {
                scale = 1;
            }
            if (!scale || isNaN(scale)) scale = 1;

            return {
                left:   (eRect.left - cRect.left) / scale,
                right:  (eRect.right - cRect.left) / scale,
                top:    (eRect.top - cRect.top) / scale,
                height: eRect.height / scale
            };
        }

        function drawSVGConnectorLines() {
            const svg = document.getElementById('lines-svg');
            const container = document.getElementById('bracket-board');
            if (!svg || !container) return;

            // Limpiamos atributos de viewBox que causan escalado interno incorrecto
            svg.removeAttribute('viewBox');
            svg.removeAttribute('width');
            svg.removeAttribute('height');
            svg.style.width = '100%';
            svg.style.height = '100%';

            svg.innerHTML = '';

            Object.keys(matchFlow).forEach(targetId => {
                const targetCard = document.getElementById(`match-${targetId}`);
                if (!targetCard) return;

                const flow = matchFlow[targetId];
                const sources = [flow.sourceA, flow.sourceB];

                sources.forEach(sourceId => {
                    const sourceCard = document.getElementById(`match-${sourceId}`);
                    if (!sourceCard) return;

                    const sRect = getRelativeCoords(sourceCard, container);
                    const tRect = getRelativeCoords(targetCard, container);

                    const isLeft = sRect.left < tRect.left;

                    let startX = isLeft ? sRect.right : sRect.left;
                    let startY = sRect.top + (sRect.height / 2);

                    let endX = isLeft ? tRect.left : tRect.right;
                    let endY = tRect.top + (tRect.height / 2);

                    if (isLeft) { startX += 5; endX -= 5; } else { startX -= 5; endX += 5; }

                    const midX = startX + (endX - startX) / 2;

                    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    const curve = `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;
                    
                    path.setAttribute('d', curve);
                    path.setAttribute('fill', 'none');
                    path.setAttribute('stroke', '#4a4b62'); 
                    path.setAttribute('stroke-width', '2');
                    path.setAttribute('class', 'svg-line');
                    path.setAttribute('data-source', sourceId);
                    path.setAttribute('data-target', targetId);
                    
                    // Aseguramos que la linea sea visible forzando dashoffset 0 por si la animacion falla en curvas invertidas
                    path.style.strokeDasharray = 'none';
                    path.style.strokeDashoffset = '0';
                    
                    svg.appendChild(path);
                });
            });
        }

        window.addEventListener('resize', () => {
            applyLayoutAndScale();
        });

        // Tabs M├│viles
        window.scrollToColumn = function(index) {
            const columns = document.querySelectorAll('.column');
            if (columns[index]) {
                columns[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        };

        function setupIntersectionObserver() {
            const columns = document.querySelectorAll('.column');
            const tabs = document.querySelectorAll('.tab-item');
            if (!columns.length || !tabs.length) return;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = Array.from(columns).indexOf(entry.target);
                        if (index !== -1 && tabs[index]) {
                            tabs.forEach(t => t.classList.remove('active'));
                            tabs[index].classList.add('active');
                            tabs[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                        }
                    }
                });
            }, {
                root: document.getElementById('scroll-area'),
                threshold: 0.5
            });

            if (window.colObserver) window.colObserver.disconnect();
            window.colObserver = observer;
            columns.forEach(col => observer.observe(col));
        }

        const originalApplyLayoutAndScale = applyLayoutAndScale;
        applyLayoutAndScale = function() {
            originalApplyLayoutAndScale();
            if (isMobileView) setupIntersectionObserver();
            else if (window.colObserver) window.colObserver.disconnect();
        };

        // Deslizamiento t├íctil en PC
        const slider = document.getElementById('scroll-area');
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            // Si el cuadro está escalado para caber (escala < 1), no permitir arrastre
            const container = document.getElementById('circular-wrapper');
            let scale = 1;
            try {
                const style = window.getComputedStyle(container);
                const matrix = style.transform || style.webkitTransform || style.mozTransform;
                if (matrix && matrix !== 'none') {
                    const parts = matrix.split('(')[1].split(')')[0].split(',');
                    scale = Math.sqrt(parseFloat(parts[0])**2 + parseFloat(parts[1])**2);
                }
            } catch(err) {}

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
        document.addEventListener('DOMContentLoaded', () => renderBracket(true));
